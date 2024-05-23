import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react-router-dom'
import logor from './logor.png'
import fb from './fb.png'
import insta from './insta.png'
import x from './x.png'
import youtube from './youtube.png'
import whatsapp from './whatsapp.png'
import bg1 from './bg1.jpg'

export const Login = () => {

    const initialVals = {uname: "", pword: ""};
    const [loginDetails, setLoginDetails] = useState(initialVals);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({...loginDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(loginDetails));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit)
        {
            console.log(loginDetails);
            // alert("Login successful !");
        }
    },[formErrors]);
    
    const validate = (values) => {
        const errors = {};

        if(values.uname === "")
        {
            errors.uname = "*Username is required";
        }

        if(values.pword === "")
        {
            errors.pword = "*Password is required";
        }

        if(values.pword.length >= 1 && values.pword.length <= 5)
        {
            values.pword = "";
            errors.pword = "*Password should contains atleast 6 characters";
        }
        return errors;
    }

    return (
    <div className="bg-green-50 w-[100%] h-[700px]">
        <img class="h-24 w-80" src={logor} alt="recharge station logo"/>

        <div className="absolute right-5 top-5 text-2xl">
            <Link to='/Rec' className="text-lime-500 font-bold ml-10 underline">RECHARGE</Link>
            <Link to='/Rhome' className="text-lime-500 font-bold ml-10 underline">HOME</Link>
            <Link to='/About' className="text-lime-500 font-bold ml-10 underline">ABOUT</Link>
            {/* <Link to='/Contact' className="text-lime-500 font-bold ml-10 underline">CONTACT</Link> */}
            <Link to='/Login' className="text-lime-500 font-bold ml-10 underline">LOGIN</Link>
        </div>

    <img className='absolute top-[22%] h-5/6 w-full' src={bg1} alt="img" />

        <div className='absolute top-[24%] left-[45%] text-indigo-900 font-extrabold text-4xl'>LOGIN</div>
    <form className='absolute top-[15%] left-[27%] h-fit w-96 mt-24 mb-24 ml-24 mr-24 p-8 rounded-lg shadow-lg' onSubmit={handleSubmit}>
        <label className='font-extrabold'>Username</label>
        <input className='w-11/12 py-3 px-4 border-transparent rounded box-border' type="text" id="uname" name="uname" placeholder='username' values = {loginDetails.uname} onChange = {handleChange} />
        <p className='text-red-500 font-bold'>{formErrors.uname}</p>
        <br/>
    
        <label className='font-extrabold'>Password</label>
        <input className='w-11/12 py-3 px-4 border-transparent rounded box-border' type="password" id="pword" name="pword" placeholder='password' values = {loginDetails.pword} onChange = {handleChange} />
        <p className='text-red-500 font-bold'>{formErrors.pword}</p>
        <br/>

        <input className='font-extrabold w-11/12 bg-indigo-900 text-white text-1xl font-bold p-3 rounded ' type="submit" value="Login" /> 
        <br/><br/>
        <Link to='/Signup' className='absolute left-[14%] text-indigo-900 font-bold'>click here to create a new account</Link>
    </form>

    <footer className="absolute top-[107%] bg-green-500 h-48 w-full text-indigo-700 font-bold text-center">
    <div className='my-12'><p>follow us on: </p>
    <div className="flex justify-center items-center space-x-4"><Link to='https://www.facebook.com/'><img src={fb} alt="fb" /></Link>
    <Link to='https://www.instagram.com/accounts/login/'><img src={insta} alt="ig" /></Link>
    <Link to='https://twitter.com/?lang=en'><img src={x} alt="x" /></Link>
    <Link to='https://www.youtube.com/'><img src={youtube} alt="youtube" /></Link>
    <Link to='https://web.whatsapp.com/'><img src={whatsapp} alt="wapps" /></Link></div>
    <p>heins road, chennai - 82<br/> 8189841883</p></div>
    </footer>
    </div>
    );
}