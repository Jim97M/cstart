import React, {useState, useEffect} from 'react';
import {
 Grid,
 Paper,
 Box,
 Avatar,
 Button,
 Typography,
 Link as NavLink
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { ValidatorForm} from 'react-material-ui-form-validator';
import OtpInput from 'react-otp-input';
import './verifyOtp.css';

const VerityOtpPage = () => {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"60px auto"}
    const avatarStyle={backgroundColor:'#6d7f9f'}   //  #3370bd
    const btnstyle={marginTop:'28px ',backgroundColor:'#6d7f9f'}
     
    const [count, setCount] = useState(59);
    useEffect(() => {
      const timer = count > 0 && setInterval(() => setCount(count - 1));

      return clearInterval(timer);
    }, [count])
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
              <h2>Verify</h2>
              <h4 style={{color: 'green'}}></h4>
              <Box color="text.secondary">
                <Typography variant="body2">
                   Enter OTP Sent to Your Mobile Number.
                </Typography>
              </Box>
            </Grid>
            <ValidatorForm>
              <OtpInput
                numInputs={6}
                inputStyle="inputStyle"
                separator={<span></span>}
              />
               <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>VERIFY</Button>
            </ValidatorForm>
            <Box mt={3} ><Typography fontWeight={500} align="center" color='textSecondary'> Resend OTP in <span style={{color:"green",fontWeight:"bold"}}> 00:{count}</span> </Typography></Box>
              
                  <Typography align="center">  
                    <NavLink to="Signup">
                     <span style={{marginLeft:"5px"}}> Resend OTP </span>
                    </NavLink>
                  </Typography> 
        </Paper>
    </Grid>
  )
}

export default VerityOtpPage;
