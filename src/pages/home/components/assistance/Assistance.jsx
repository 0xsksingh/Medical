import React from 'react'
import helper from './images/helper.png'
import {
  Typography,
  Box,
  Stack,
  Card,
  Grid,


} from '@mui/material'
import Nav from './Nav'
export default function Assistance() {
  return (
    <>
     
    <Box
    >
      <Typography variant='h4'
      sx={{
        display:'inline-block',
        marginLeft:'30rem',
        marginTop:'8rem'
      }}>Your Personalised Health Assistant</Typography>
      <Stack
      mt='20px'
       direction={{ xs: 'column', sm: 'row' }}
       spacing={{ xs: 1, sm: 2, md:  30}}
       sx={{
        border:'gray solid 3px',

      }}
       >
<Box sx={{
  // position:'inline-block',
  // width:'500px'
  ml:'400px'
}}>

    <Typography
    variant='h5'
    sx={{
      marginTop:'5px',
    }}
    >Diet: You should eat B12 rich food</Typography>
    <Typography
    variant='h5'
    sx={{
      marginTop:'5px',
    }}
    >Diet: You should protien rich food like fish.</Typography>

    <Typography
    variant='h5'
    sx={{
      marginTop:'5px',
    }}
    >You should walk five miles daily</Typography>
    <Typography
    variant='h5'
    sx={{
      marginTop:'5px',
    }}
    >You should finish your dinner by 7pm</Typography>

</Box>
      <img
      style={{
        // marginLeft:'60rem',
        marginTop:'0rem',
        display:'inline-block',
      }}
      src={helper} alt="" />
      </Stack>


      </Box>
      </>
  )
}

