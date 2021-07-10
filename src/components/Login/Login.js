import React from 'react'
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './Login.css'


class Login extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptcha varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent", error)
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() {
    return (
      <>
      <div className="form">
        <div className="form_container">
        <h2>Login</h2>
        <form className="form_text" onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <TextField  id="standard-secondary" label="Phone No." color="primary" type="number" name="mobile" required onChange={this.handleChange}/>
          <Button className="button" variant="contained" color="primary" type="submit">Submit</Button>
        </form>
        <form className="form_text" onSubmit={this.onSubmitOTP}>
          <TextField id="standard-secondary" label="Enter OTP" color="primary" type="number" name="otp" required onChange={this.handleChange}/>
          <Button className="button" variant="contained" color="primary" type="submit">Submit</Button>
        </form>
        </div>
      </div>
      </>
    )
  }
}
export default Login