import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function LoginForm() {
  const [sitekey, setSitekey] = useState("");
  const [showReCAPTCHA, setShowReCAPTCHA] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaVerify = (token) => {
    if (!isCaptchaVerified) {
      setIsCaptchaVerified(true);
      console.log(token, "ini token");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isCaptchaVerified) {
      alert("Verifikasi berhasil");
      // Lakukan logika pengiriman data login ke server atau validasi lainnya
    } else {
      alert("Harap verifikasi reCAPTCHA");
    }
  };

  const handleShowReCAPTCHA = () => {
    if (sitekey !== "") {
      setShowReCAPTCHA(true);
    }
  };

  return (
    <div style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
      <div>
        <label>Sitekey:</label>
        <br />
        <input type="text" value={sitekey} onChange={(e) => setSitekey(e.target.value)} />
        <br />
      </div>

      <br />
      <button onClick={handleShowReCAPTCHA}>Show reCAPTCHA</button>
      <br />

      <br />
      {showReCAPTCHA && (
        <ReCAPTCHA
          sitekey={sitekey || ""}
          onChange={handleCaptchaVerify}
          type="image"
        />
      )}
      <br />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default LoginForm;
