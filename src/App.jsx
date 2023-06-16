import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function LoginForm() {
  const [sitekey, setSitekey] = useState("");
  const [showReCAPTCHA, setShowReCAPTCHA] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaVerify = (token) => {
    setIsCaptchaVerified(true);
    console.log(token, 'ini token')
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isCaptchaVerified) {
      alert('isverifikasi')
      // Lakukan logika pengiriman data login ke server atau validasi lainnya
    } else {
      alert("Harap verifikasi reCAPTCHA");
    }
  };

  const handleShowReCAPTCHA = () => {
    if(sitekey !== '') {
      setShowReCAPTCHA(true)
    } 
  }

  {/* 6Lf2ZKEmAAAAAKe7IK7_BaTu_twXi9ujhVLfK_74 */}


  return (
    <div style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      {/* <form onSubmit={handleSubmit}> */}
        <div>
          <label>Sitekey:</label>
          <br/>
          <input
            type="text"
            value={sitekey}
            onChange={(e) => setSitekey(e.target.value)}
            />
            <br/>
        </div>

            <br/>
        <button onClick={handleShowReCAPTCHA}>showReCAPTCHA</button>
            <br/>

            <br/>
            {showReCAPTCHA && 
            <ReCAPTCHA
            sitekey={sitekey || ''}
            onChange={handleCaptchaVerify}
            type="audio"
            />
            } 
          <br/>

        <button onClick={handleSubmit}>Login</button>
      {/* </form> */}
    </div>
  );
}

export default LoginForm;