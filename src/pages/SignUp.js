// import React from "react";
// import "./Signin.css"
// import { Button } from "react-bootstrap";
// import { useDispatch} from "react-redux";
// import { createUser } from "../features/user/userSlice";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import apple from '../images/apple.png'
// import facebook from '../images/facebook.png'
// import { DOMAIN } from "../store/url";

// function SignUp() {
//   const dispatch = useDispatch();
//   // const [name, setName] = useState();
//   // const [pass, setPass] = useState();
//   // const [email, setEmail] = useState();

//   const schema = yup.object({
//     name: yup.string().required("your name"),
//     email: yup.string().required("email address"),
//     password: yup.string().required("password"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//     validationSchema: schema,
//     onSubmit: (values) => {
//       dispatch(createUser(values));
//       // dispatch(createUser({ name: name, password: pass, email: email }));
//     },
//   });

//   return (
//     <div className="signin">

//       <div className="text-center">
//     <h1>Create an account</h1>
//       <div className="center">
//         <input type="checkbox" style={{marginBottom:"10px"}}/>
//         <p className="m-1">Personal account</p>
//         </div>
//       </div>

//       <div className="signin2">

//         <form className="signin-by-email-and-password">

//       {/* <label htmlFor="name">Name</label> */}
//       <div className="text-danger">{formik.errors.name}</div>
//       <input
//       placeholder="Name"
//         onChange={formik.handleChange("name")}
//         name="name"
//         value={formik.values.name}
//         id="name"
//         type="string"
//       />

//       {/* <label htmlFor="email">Email</label> */}
//       <div className="text-danger">{formik.errors.email}</div>
//       <input
//       placeholder="Email"
//         name="email"
//         onChange={formik.handleChange("email")}
//         value={formik.values.email}
//         id="email"
//         type="email"
//       />

//       {/* <label htmlFor="password">Password</label> */}
//       <div className="text-danger">{formik.errors.password}</div>
//       <input
//       placeholder="password"
//         onChange={formik.handleChange("password")}
//         name="password"
//         value={formik.values.password}
//         id="password"
//         type="password"
//       />

//       <Button onClick={formik.handleSubmit}>Submit</Button>
//       <a href="/login">
//       {/* <button>Signin</button> */}
//       </a>
//         </form>

//         <div className="goog">
//         <div className="googles"><img src={apple} />Continue with Apple</div>
//         <div className="googles"><img src={facebook} />Continue with Facebook</div>
//         </div>

    
//       </div>

//      <a href={`/${DOMAIN}/login`}>login</a>

//     </div>
//   );
// }

// export default SignUp;

function SignUp() {
    return(
        <div>signup</div>
    )
}
export default SignUp