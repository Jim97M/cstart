import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import confirmImage from "../../assets/success.png"; 
import axios from "axios";

const EmailVerify = () => {

    const [validUrl, setValidUrl] = useState(true);
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
          try {
              const url = `http://localhost:5000/api/users/${param.id}/verify/${param.token}`;
              const {data} = await axios.get(url);
            console.log(data);
              setValidUrl(true);
           } catch (error) {
               console.log(error);
               setValidUrl(false);
          }
        };
        verifyEmailUrl();
    }, [param]);  

  return (
    <>
     {validUrl ? (
        <div className="container">
                  <img src={confirmImage} alt="success_img" />
                  <h1>Email verified successfully</h1>
                  <Link to="/login">Login</Link>        
        </div>
     ) : (
                  <h1>Invalid link</h1>
     )}
    </>
  )
}

export default EmailVerify;
