import React from "react";
import CoverImage from "./CoverImage";
import './Landing.css'
import Header from "./Header";
import { Button, Typography, Box, Stack, Card, Link } from "@mui/material";
import {BsFillClipboard2PlusFill} from 'react-icons/bs'
import {TbAmbulance} from 'react-icons/tb'
import logo from './images/healTracjk.jpg'
import doc from './images/Sprints1.jpg'
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Landing() {
  return (
    <Box>
      <Card
      sx={{
        display:'flex',
        background:'#9fd1dd',
        marginBottom:'50px',
        position:'sticky',
        zIndex:'1',
        top:'0',
        // opacity:'.7',
      }}>
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 5, md: 80,lg: 100 }}
        >

        <img src={logo} style={{borderRadius:'50%', width:'60px', margin:'3px'}}alt="" />
        <Box
        >
        <Button
          type="submit"
          variant="outlined"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            // backgroundColor: '#228b22',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          href=''

          >
          Home
          </Button>
          <Button
          type="submit"
          variant="outlined"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            // backgroundColor: '#4169E1',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          >
            About Us
          </Button>
          <Button
          type="submit"
          variant="outlined"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            // backgroundColor: '#228b22',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          >
          Contact Us
          </Button>
          <ConnectButton />
          </Box>
          </Stack>
      </Card>
      <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 5, md: 20 }}
      sx={{
        justifyContent:'center',
        marginTop:'0px',
      }}
      >
        <Stack marginTop={'100px'}>
        <Box >
          <Typography
          sx={{
            display:'inline-block',
            fontSize:'1.2rem',
            color:'#228B22',
            fontWeight:'bold',

          }}
          >Your Health, </Typography>
          <Typography
          sx={{
            display:'inline-block',
            color:'#4169E1',
            fontWeight:'bold',
          }}
          > Your Data</Typography>

        </Box>
        <Box>
        <Typography variant='h3'
          sx={{
            color:'#228B22',
            display:'inline-block',
            fontWeight:'bold',

          }}
          >Heal</Typography>
          <Typography variant='h3'
          sx={{
            display:'inline-block',
            color:'#4169E1',
            fontWeight:'bold',

          }}
          >Track</Typography>
        </Box>

        <Box>


          <Typography sx={{
            fontSize:'.9rem',
          }}>Now manage your health records</Typography>
        </Box>
        <Typography sx={{
            fontSize:'.9rem',
          }}>A path for your better tomorrow</Typography>
           <Typography sx={{
            fontSize:'.9rem',
          }}>Your health our priority</Typography>

        <Box>
        <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#228b22',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          href='home'
          >Login</Button>
          <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#4169E1',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          href='register'
          >Register</Button>
        </Box>

      </Stack>
      <Box>
        <img src={doc}></img>
      </Box>
    </Stack>
    <Box sx={{ mt: 'auto', py: 2, backgroundColor: '#9fd1dd' }}>
      <Typography variant="body2" align="center">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link sx={{ p: 1 }} href="/">Home</Link>
          <Link sx={{ p: 1 }} href="/about-us">About Us</Link>
          <Link sx={{ p: 1 }} href="/contact-us">Contact Us</Link>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Made with ❤️ Technorist Team </Typography>
        </Box>
      </Typography>
    </Box>
   </Box>

  );
}

export default Landing;
