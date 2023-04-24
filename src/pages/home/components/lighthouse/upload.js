import React from "react";
import lighthouse from '@lighthouse-web3/sdk';

function Lighthouseupload() {

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadFile = async(e) =>{
    // Push file to lighthouse node
    // Both file and folder are supported by upload function
    const output = await lighthouse.upload(e, "59424315-565a-4f1d-8d60-b8c6de63bae2", progressCallback);
    console.log('File Status:', output);
    /*
      output:
        data: {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
  }

  return (
    <div className="App">
      <input onChange={e=>uploadFile(e)} type="file" />
    </div>
  );
}

export default Lighthouseupload;