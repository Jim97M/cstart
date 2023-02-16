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
import PhoneInput from 'react-phone-input-2'
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css'
import './verifyOtp.css';

const BaseURL = process.env.BASE_URL

const VerityOtpPage = () => {
    const navigate = useNavigate();
    const [phoneInserted, setPhoneInserted] = useState(false);
    const [phone, setphone] = useState('');
    const [waitMessage, setwaitMessage] = useState(true);
    const [checkedNumber, setcheckedNumber] = useState('');
    const [verification, setverification] = useState('');
    const [loading, setLoading] = useState(false);
    const paperStyle={padding :20,height:'45vh',width:380, margin:"60px auto", marginTop: "120px"}
    const avatarStyle={backgroundColor:'#6d7f9f'}   //  #3370bd
    const btnstyle={marginTop:'28px ',backgroundColor:'#6d7f9f'}
     
    const [count, setCount] = useState(59);
    useEffect(() => {
      const timer = count > 0 && setInterval(() => setCount(count - 1));

      return clearInterval(timer);
    }, [count])

    const sendCode = () => {
      setPhoneInserted(true);
      setwaitMessage(true);
        fetch(`${BaseURL}/send/+${phone}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.status === 'pending') {
            setcheckedNumber(phone);
            setwaitMessage(false);
          }
        })
        .catch(err => {
          setPhoneInserted(false);
          setwaitMessage(false);
          setphone('');
          console.log(err);
          alert(err);
        });
    }

    const verifyCode = () => {

      // Now check if the verfication inserted was the same as
      // the one sent
      setLoading(false);
      fetch(`${BaseURL}/verify/${checkedNumber}/${verification}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.status === 400) {
            // Navigate to another page  once phone is verfied
            navigate('/');
          } else {
            // Handle other error cases like network connection problems
            alert('Verification failed try again!!');
            // reset();
            // If not network error like wrong number try again
            setretry(true);
          }
        });
    };

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
            <ValidatorForm style={{marginTop: "20px"}} onSubmit={sendCode}>  
            <PhoneInput
            country={'us'}
            value={phone}
            onChange={phone => setphone(phone)}
            containerStyle={{marginTop: "20px", marginLeft: "34px"}}
            />
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Send OTP</Button>
            </ValidatorForm>
            <ValidatorForm onSubmit={verifyCode}>
              <OtpInput
                numInputs={6}
                value={verification}
                onChange={setverification}
                containerStyle={{marginTop: 15, justifyContent: 'space-evenly', marginHorizontal: 40}}
                inputStyle={{backgroundColor: "#fff", height: 43, width: 32, borderRadius: 10, borderWidth: 0.6, borderColor: "#000000"}}
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
