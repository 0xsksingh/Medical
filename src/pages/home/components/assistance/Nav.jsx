import React from 'react';
import { Button, Grid, Box, Typography, Stack, TextField } from '@mui/material';
// import tabel from '../images/doctor-with-patient-stock-animation-3067-1280x720.webp';
// import Access from '../Access';
// import AddRecords from '../../add-records/AddRecords';
// import ViewRecords from '../../view-records/ViewRecords';
import Assistance from '../assistance/Assistance';
function Home() {
  return (
    <Box
    sx={{ p: 2 }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search doctors"
            sx={{ width: '300px' }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
          >
            Add Records
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
          >
            Give Access
          </Button>
        </Grid>
      </Grid>
     {/* <Access></Access> */}
     {/* <AddRecords></AddRecords> */}
     {/* <ViewRecords></ViewRecords>
     <ViewRecords></ViewRecords>
     <ViewRecords></ViewRecords>
     <ViewRecords></ViewRecords>
     <ViewRecords></ViewRecords>
     <ViewRecords></ViewRecords> */}
    </Box>
  );
}

export default Home;
