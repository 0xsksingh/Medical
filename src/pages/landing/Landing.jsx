import React from "react";
import CoverImage from "./CoverImage";
import './Landing.css'
import Header from "./Header";
import { Button, Typography, Box, Stack, Card, Link } from "@mui/material";
import {BsFillClipboard2PlusFill} from 'react-icons/bs'
import {TbAmbulance} from 'react-icons/tb'
import logo from './images/healTracjk.jpeg'
import doc from './images/Sprints1.jpg'
function Landing() {
  return (
    // <div>
    //   {/* <Header></Header> */}
    //   {/* <button>
    //     <a href="/register">Register</a>
    //   </button> */}
    //   <Stack
    //     mt={0}
    //     // direction="row" spacing={70}
    //     direction={{ xs: "column", sm: "row" }}
    //     spacing={{ xs: 1, sm: 2, md: 40 }}
    //   >
    //     <img src={logo} alt="image" className='img'/>
    //   <Header></Header>
    //   <Box sx={{ w: 30, mt: '4rem', ml:'4rem', display:'inline-block',positon: 'absolute', }}>
    //     <Stack
    //     mx={3} my={4}
    //      direction={{ xs: 'column', sm: 'row' }}
    //      spacing={{ xs: 1, sm: 2, md: 3 }}
    //      >
    //       {/* <Button variant="contained" size='large'
    //       sx={{ fontSize: '1.2rem', padding:'.6rem 1.2rem' }}
    //       style={{ backgroundColor: 'rgb(0, 255, 119)' , boxShadow: "3px 3px 3px green"}}

    //       ></Button> */}
    //         <Button
    //           variant="contained"
    //           size="large"
    //           sx={{ fontSize: "1.2rem", padding: ".6rem 1.2rem" }}
    //           style={{
    //             backgroundColor: "rgb(0, 255, 119)",
    //             boxShadow: "3px 3px 3px green",
    //           }}
    //           href='/home'
    //         >
    //           Login
    //         </Button>
    //         <Button
    //           variant="contained"
    //           sx={{ fontSize: "1.2rem", padding: "0 1.2rem" }}
    //           style={{
    //             backgroundColor: "rgb(0, 255, 119)",
    //             boxShadow: "3px 3px 3px green",
    //           }}
    //           href="/register"
    //         >
    //           Register
    //         </Button>
    //       </Stack>
    //     </Box>
    //   </Stack>
    //   <CoverImage></CoverImage>
    //   <Box
    //   sx={{
    //     display:'inline-block',
    //     marginLeft:'50%'
    //   }}>
    //     <Box
    //     sx={{
    //       // height:'400px',
    //       // width:'200px',
    //     }}>
    //       {/* <Typography>
    //       HealTrack helps you manage your medical history seamlessly</Typography>
    //       <Typography>so you can focus on your health.</Typography>
    //       <Typography> From storing reports to viewing your timeline, we've got you covered
    //       </Typography> */}
    //       <Stack>
    //       <Typography variant="h3" color={'teal'}>Your health, Our Priority.</Typography>
    //       <Box
    //       sx={{
    //         marginLeft:'60px',
    //         // boxShadow: "3px 3px 3px green",
    //       }}>
    //         <ul>
    //         {/* <i class="fa-solid fa-triangle">  </i> */}
    //         <Stack sx={{color:'green'}}
    //         direction={"row"}>
    //         <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'} variant="h5">Manage your medical history seamlessly</Typography>
    //         </Stack>

    //         <Stack sx={{color:'green'}}
    //         direction={"row"}
    //         >
    //         <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'} variant="h5">Say GoodBye to scattered medical records</Typography>
    //         </Stack>

    //         <Stack sx={{color:'green'}}
    //         direction={"row"}
    //         >
    //         <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'} variant="h5">Where care meets convenience.</Typography>
    //         </Stack>

    //         <Stack sx={{color:'green'}}
    //         direction={"row"}
    //         >
    //         <div className="icon"><BsFillClipboard2PlusFill ></BsFillClipboard2PlusFill></div><Typography color={'#bb6868'}  variant="h5">Simplify your life, One record at a time.</Typography>
    //         </Stack>

    //         </ul>
    //       </Box>
    //       </Stack>

    //     </Box>
    //   </Box>

    // </div>

    <Box>
      <Card
      sx={{
        display:'flex',
        // width:'500px',
        // marginLeft:'800px',
        // mt:'50px',
        // justifyContent:'right',
        // alignItems:'right',
        background:'#9fd1dd',
        marginBottom:'50px',
        position:'sticky',
        zIndex:'1',
        top:'0',
        opacity:'.7',

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
          <Typography variant="body2">Stay Connected:</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link sx={{ p: 1 }} href="https://www.instagram.com/">Instagram</Link>
            <Link sx={{ p: 1 }} href="https://www.twitter.com/">Twitter</Link>
            <Link sx={{ p: 1 }} href="https://www.facebook.com/">Facebook</Link>
          </Box>
        </Box>
      </Typography>
    </Box>
   </Box>

  );
}

export default Landing;
