import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './forms.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// سطر 4 و 5 للفاليدايشن

export const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);


  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault(); // بتمنع حدوث الريلود في حال الضغط على اللوق إن
    
    if(email.trim() === "") return toast.error("Email is required"); // بقلو اذا كان الايميل فارغ اعمل ريتورن ولما يعمل ريتورن الكود اللي بعدو ما بنفذو
    if(password.trim() === "") return toast.error("password is required");

    console.log({email, password});
  };

  // Show Password Handler
  const showPasswordHandler = () => {
    setShowPassword(prev => !prev); // اذا كانت الشو باسوورد فولس اعملها ترو واذا كان ترو اعملها فولس
  }


  return (
    <div className="form-wrapper">
      <ToastContainer theme='colored'/> 
      {/* لحتى يعملي فاليدايشن */}
      {/* theme='colored' بعطيني رسالة الايرور ملونة */}
      <h1 className="form-title">Login to your account</h1>
      <form onClick={formSubmitHandler} className='form'>
        <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder='Email'
        />
        {/* value={email} onChange={e => setEmail(e.target.value)}  بخزن القيمة اللي بكتبها في انبوت الايميل في المتغير اللي اسمو ايميل  */}
        <input
        value={password}
        onChange={e => setPassword(e.target.value)} 
        type={showPassword ? "text" : "password"}
        placeholder='Password'/>

        {showPassword ? (
          <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>
        ) : (
          <i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>
        )}
        
        

        <button className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        Don't have an account ? {" "}
        <Link to="/register" className='form-link'>
          Register
        </Link>
      </div>
    </div>
  )
}
