import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logor from './logor.png'
import fb from './fb.png'
import insta from './insta.png'
import x from './x.png'
import youtube from './youtube.png'
import whatsapp from './whatsapp.png'
import bg2 from './bg2.jpg'

export const Rec = () => {

   const initialVals = {service: "", type: "", plan: "", number: "", amount: "", payment_method: ""};
    const [rechargeDetails, setRechargeDetails] = useState(initialVals);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedDetails = { ...rechargeDetails, [name]: value };

        if (name === "service") {
            updatedDetails = { ...updatedDetails, type: "", plan: "", amount: "" };        
        }

        else if (name === "type") {
            updatedDetails = { ...updatedDetails, plan: "", amount: "" };
        }

        setRechargeDetails(updatedDetails);
    };

    const typeOptions = () => {
        switch (rechargeDetails.service) {
            case "mobile":
                return ["Airtel", "Jio", "Vi"];

            case "dth":
                return ["Tata sky", "Sun direct", "Dish tv"];

            case "wifi":
                return ["JioFiber", "ACT Fibernet", "Airtel broadband"];

            case "ott" : 
                return ["Hotstar", "Netflix", "Amazon Prime"];
                
            default:
                return [];
        }
    };

    const planOptions = () => {
        switch (rechargeDetails.type) {
        case "Airtel":
        case "Jio":
        case "Vi":
                return ["only calls 20 days", "Data and calls 10 days", "only data 50 days"];

        case "Tata sky":
        case "Sun direct":
        case "Dish tv":
                return ["1 month", "6 months", "12 months"];

        case "JioFiber":
        case "ACT Fibernet":
        case "Airtel broadband":
                return ["1 month wifi", "12 months wifi + free 1 month", "6 months wifi"];

        case "Hotstar":
        case "Netflix":
        case "Amazon Prime": 
                return ["1 month subcription", "6 months subscription", "12 months subscription"];

            default:
                return [];
        }
    };

    const amountOptions = () => {
    switch(rechargeDetails.plan) {
        case "only calls 20 days" :
            return ["Rs. 50"];

        case "Data and calls 10 days":
            return ["Rs. 101"];
        
        case "only data 50 days":
            return ["Rs. 279"];
        
        case "1 month":
            return ["Rs. 500"];
        
        case "6 months":
            return ["Rs. 4000"];
        
        case "12 months":
            return ["Rs. 7200"];
        
        case "1 month wifi":
            return ["Rs. 299"];

        case "12 months wifi + free 1 month":
            return ["Rs. 3599"];
        
        case "6 months wifi":
            return ["Rs. 1299"];
        
        case "1 month subcription":
            return ["Rs. 199"];
        
        case "6 months subscription":
            return ["Rs. 1999"];
        
        case "12 months subscription":
            return ["Rs. 2999"];
        
        default:
            return [];
    }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(rechargeDetails));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit)
        {
            console.log(rechargeDetails);
            navigate("/Done");
        }
    },[formErrors]);
    
    const validate = (values) => {
        const errors = {};

        if(values.service === "")
        {
            errors.service = "*Select a service";
        }

        if(values.type === "")
        {
            errors.type = "*Select a type";
        }

        if(values.plan === "")
        {
            errors.plan = "*Select a plan";
        }

        if(values.number === "")
        {
            errors.number = "*Phone number is required";
        }

        if(values.payment_method === "")
        {
            errors.payment_method = "*Select a payment method";
        }

        if(values.number.length >=1 && values.number.length <=9)
        {
            errors.number = "*Phone number should contain 10 digits";
        }
        return errors;
    }


    return (
    <div className="bg-green-50 w-[100%] h-[1000px]">
        <img class="h-24 w-80" src={logor} alt="recharge station logo"/>
        <img className='absolute top-[20%] w-full' src={bg2} alt="img" />

        <form className='absolute top-[15%] left-[25%] h-fit w-1/3 mt-24 mb-24 ml-24 mr-20 p-8 rounded-lg shadow-indigo-950 shadow-lg text-white font-bold' onSubmit={handleSubmit}>
            
        <div className="flex items-center"><label>Select Service:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select className='w-3/6 py-2 px-2 border-transparent text-black rounded box-border' name="service" id="service" values = {rechargeDetails.service} onChange = {handleChange}>
            <option>select</option>
            <option value="mobile">Mobile Recharge</option>
            <option value="dth">DTH Recharge</option>
            <option value="wifi">WIFI Recharge</option>
            <option value="ott">OTT Recharge</option>
        </select></div>
        <p className='text-red-500 font-bold'>{formErrors.service}</p><br/>
        

        {rechargeDetails.service !== "" && (
        <div className="flex items-center"><label>Select Type:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select className='w-3/6 py-2 px-3 border-transparent text-black rounded box-border' name="type" id="type" values = {rechargeDetails.type} onChange = {handleChange}>
            <option>select</option>
            {typeOptions().map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select></div>
        )}
        <p className='text-red-500 font-bold'>{formErrors.type}</p><br/>

        {rechargeDetails.type  && (
        <div className="flex items-center"><label>Select Plan:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select className='w-3/6 py-2 px-3 border-transparent text-black rounded box-border' name="plan" id="plan" values = {rechargeDetails.plan} onChange = {handleChange}>
            <option>select</option>
            {planOptions().map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select></div>
        )}
        <p className='text-red-500 font-bold'>{formErrors.plan}</p><br/>

        {rechargeDetails.plan  && (
        <div className="flex items-center"><label>Amount:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select className='w-3/6 py-2 px-3 border-transparent text-black rounded box-border' name="amount" id="amount" values = {rechargeDetails.amount} onChange = {handleChange}>
            {amountOptions().map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select></div>
        )}
        <p className='text-red-500 font-bold'>{formErrors.amount}</p><br/>


        <div className="flex items-center"><label>Mobile Number:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input className='w-3/6 py-2 px-3 text-black border-transparent rounded box-border' type="text" id="number" name="number" values = {rechargeDetails.number} onChange = {handleChange} /><br/><br/></div>
        <p className='text-red-500 font-bold'>{formErrors.number}</p>
        <br/>

        <div className="flex items-center"><label>Payment Method:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select className='w-3/6 py-2 px-3 border-transparent text-black rounded box-border' name="payment_method" id="payment_method" values = {rechargeDetails.payment_method} onChange = {handleChange}>
            <option>select</option>
            <option value="credit_card">Credit/Debit Card</option>
            <option value="net_banking">Net Banking</option>
            <option value="wallet">Digital Wallet</option>
            <option value="upi">UPI</option>
        </select></div>
        <p className='text-red-500 font-bold'>{formErrors.payment_method}</p><br/>
        
        <input className='font-extrabold w-11/12 bg-lime-500 text-white text-1xl font-bold p-3 rounded ' type="submit" value="PAY" />
        </form>


        <div className="absolute right-5 top-5 text-2xl">
            <Link to='/Rec' className="text-lime-500 font-bold ml-10 underline">RECHARGE</Link>
            <Link to='/Rhome' className="text-lime-500 font-bold ml-10 underline">HOME</Link>
            <Link to='/About' className="text-lime-500 font-bold ml-10 underline">ABOUT</Link>
            {/* <Link to='/Contact' className="text-lime-500 font-bold ml-10 underline">CONTACT</Link> */}
            <Link to='/Login' className="text-lime-500 font-bold ml-10 underline">LOGIN</Link>
        </div>

    <footer className="absolute top-[148%] bg-green-500 h-48 w-full text-indigo-700 font-bold text-center">
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