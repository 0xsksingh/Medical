/* eslint-disable */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Hospital from "./abis/Hospital.json";
import Landing from "./pages/landing/Landing.jsx";
import Register from "./pages/register/Register.jsx";
import Verify from "./pages/verify/Verify.jsx";
import Home from "./pages/home/Home.jsx";
import PagenotFound from "./pages/landing/PagenotFound";
import Assistance from "./pages/home/components/assistance/Assistance";
// rainbow wallet
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [provider, setProvider] = useState(null);

  const { chains, provider: wagmiProvider } = configureChains(
    [mainnet, polygon, optimism, polygonMumbai],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider: wagmiProvider
  })

  
  useEffect(() => {
    const loadProvider = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x25913211d30F5cF3a73eBFE719D724c75f04794a";

        const contract = new ethers.Contract(
          contractAddress,
          Hospital.abi,
          signer
        );


        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    loadProvider();
  }, []);
  
  return (
    <div className="App">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="register" element={<Register contract={contract} />} />
              <Route path="verify" element={<Verify />} />
              <Route
                path="home/*"
                element={
                  <Home account={account} provider={provider} contract={contract} />
                }
              />
              <Route path="assistance" element={<Assistance />} />
              <Route path='*' element={<PagenotFound />} />
            </Routes>
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
