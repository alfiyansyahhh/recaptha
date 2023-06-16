import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleSubmit = (event) => {
    if (isCaptchaVerified) {
      alert('verifikasi berhasil')
    } else {
      alert("Harap verifikasi reCAPTCHA");
    }
  };

  const handleCaptchaVerify = (token) => {
    setIsCaptchaVerified(true);
    console.log(token, 'ini token')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <ReCAPTCHA sitekey="6Lf2ZKEmAAAAAKe7IK7_BaTu_twXi9ujhVLfK_74"
      onChange={handleCaptchaVerify}
      type="audio"
      />
      <button type="submit">Login</button>
    </form>

    </>
  )
}

export default App
