import * as jwt_decode from "jwt-decode";
import { Button } from "react-bootstrap";
import { DOMAIN } from "../store/url";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import {SignIn} from "../features/user/userSlice"
import {useFormik} from "formik"
import * as yup from "yup";
import "./Signin.css"


function Login() {
  const dispatch = useDispatch()
  const [user, setUser]  = useState()

  const schema = yup.object({
    email: yup.string().required("Enter email"),
   password: yup.string().required("Enter password")
  })
  
  useEffect(() => {
    if(user){
      dispatch(SignIn(user))
    }
  },[user])
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit(values) {
      dispatch(SignIn(values))
    }
  })

  return (
  <div className="signin">

      <div className="text-center">
        <h1>Sign in </h1>
        <div className="center">
        <input type="checkbox" style={{marginBottom:"10px"}} value={true}/>
        <p className="m-1">Personal account</p>
        </div>
      </div>

      <div className="signin2">

      <div className="signin-by-email-and-password">

        <div className="text-danger">{formik.errors.email}</div>
        <input type="email" placeholder="Email" onChange={formik.handleChange('email')} value={formik.values.email} name="email"/>
        <div className="text-danger">{formik.errors.password}</div>
        <input type="password" placeholder="Password" onChange={formik.handleChange('password')} value={formik.values.password} name="password"/>
        <Button onClick={formik.handleSubmit}>Continue</Button>
      </div>

      <div className="google">
  <div className="googles"><img src="images/apple.png" /></div>
  <div className="googles"><img src="images/facebook.png" /></div>
  <div className="googles">
      <GoogleOAuthProvider clientId="545000376422-i794niqqdrs2gseku78ochaqrvbbjt4v.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(ev) => {
            const theUser = jwt_decode(ev.credential)
            console.log(ev)
            setUser(theUser)
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          />
      </GoogleOAuthProvider>
            </div>
      </div>
      </div>
     <a href={`/${DOMAIN}/register`}>Sign up</a>


  </div>

  )
}

export default Login;
