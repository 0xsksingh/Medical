import React, { useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Radio,
  Stack,
  Box,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  TextField
} from '@mui/material';

import main from './images/Sprints1.jpg';
import doc from './images/doc.jpg';
import patient from './images/patient.jpg';
function Register({ contract }) {
  const [opt, setOpt] = useState(null);
  const [user, setUser] = useState('');
  const [pname, setPname] = useState('');
  const [page, setPage] = useState('');
  const [dname, setDname] = useState('');
  const [dage, setDage] = useState('');
  // const [isPatient, setIspatient] = useState(true);
  const registerAsP = async e => {
    setOpt('P');
    setUser('Patient');
    console.log(opt);
  };
  const registerAsD = e => {
    setOpt('D');
    setUser('Doctor');

    console.log(opt);
  };

  const add_patient = async e => {
    e.preventDefault();

    // const pname = document.getElementById("pname").value;
    // const page = document.getElementById("page").value;
    // setPname(e.target.value);
    // setPage(e.target.value);
    console.log(pname);
    console.log(page);
    const addingPatient = await contract.add_agent(pname, page, 0);
    console.log('patient added named', pname, 'age:', page);
    window.location.href = '/home';
  };

  const add_doctor = async e => {
    e.preventDefault();
    // setDname(e.target.value);
    // setDage(e.target.value);
    console.log(dname);
    console.log(dage);
    // const dname = document.getElementById("dname").value;
    // const dage = document.getElementById("dage").value;

    const addingDoctor = await contract.add_agent(dname, dage, 1);
    console.log('Doctor added named', dname, 'age:', dage);
    window.location.href = '/home';
  };

  return (
    <>

    
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 5, md: 30 }}
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            border: '3px solid gray',
            paddingTop: '1rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            marginLeft: '3rem'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: '20px',
              mt: '0'
            }}
          >
            Choose Account Type
          </Typography>

          <img
            src={doc}
            style={{
              width: '200px',
              height: '200px',
              display: 'inline-block',
              borderRadius: '10%',
              marginRight: '2rem'
            }}
            alt=""
          />

          <img
            src={patient}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '10%',
              display: 'inline-block'
            }}
            alt=""
          />

          <Box
            sx={
              {
                // position:'relative',
              }
            }
          >
            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="Pateint"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  sx={{
                    marginLeft: '60px'
                  }}
                  // value="female"
                  control={<Radio />}
                  onClick={registerAsD}
                  label="Doctor"
                />

                <FormControlLabel
                  sx={{
                    marginLeft: '110px'
                  }}
                  value="male"
                  control={<Radio />}
                  label="Patient"
                  onClick={registerAsP}
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Typography
            sx={{
              justifyContent: 'right',
              alignItems: 'right',
              marginLeft: '40%'
            }}
          >
            Hello {user}!
          </Typography>
          <Typography
            sx={{
              marginLeft: '10%'
            }}
          >
            Please fill out this below form to get started.
          </Typography>

          <Box>
            <TextField
              fullWidth
              value={opt === 'P' ? pname : dname}
              onChange={(e)=>opt === 'P'?setPname(e.target.value):setDname(e.target.value)}
              sx={{
                display: 'block',
                // mb:'20px',
                // justifyContent:'center',
                // marginLeft:'20%',
                marginTop: '10px'
              }}
              id="outlined-basic"
              label="Enter your Name."
              variant="outlined"
            />
            <TextField
              fullWidth
              onChange={(e)=>opt === 'P'?setPage(e.target.value):setDage(e.target.value)}
              value={opt === 'P' ? page : dage}
              sx={{
                display: 'block',
                // marginLeft:'10%',
                // mb:'20px',
                justifyContent: 'center',
                marginTop: '10px'
              }}
              id="outlined-basic"
              label="Enter your age."
              variant="outlined"
            />
            {opt==='D'?<TextField
              fullWidth
              // onChange={(e)=>opt === 'P'?setPage(e.target.value):setDage(e.target.value)}
              value={opt === 'P' ? page : dage}
              sx={{
                display: 'block',
                // marginLeft:'10%',
                // mb:'20px',
                justifyContent: 'center',
                marginTop: '10px'
              }}
              id="outlined-basic"
              label="Doctor Id"
              variant="outlined"
            />:''}
            {pname}
            {page}
            <Button
              type="submit"
              variant="contained"
              // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
              style={{
                backgroundColor: '#4169E1',
                // boxShadow: '3px 3px 3px green',
                marginTop: '1rem',
                marginBottom: '2rem',
                marginLeft: '37%'
              }}
              onChange={()=>opt ==="P"?add_patient():add_doctor()}
              href="home"
            >
              Register
            </Button>
          </Box>
        </Box>
        <img
          src={main}
          alt=""
          style={{
            marginTop: '100px'
          }}
        />
      </Stack>
    </>
  );
}

export default Register;
