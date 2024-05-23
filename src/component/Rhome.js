import React from 'react'
import { Link } from 'react-router-dom'
import logor from './logor.png'
import tu33 from './tu33.png'
import tu3 from './tu3.png'
import ph from './ph.png'
import dish from './dish.png'
import wifi from './wifi.png'
import land from './land.png'
import bill from './bill.png'
import Ellipse from './Ellipse.png'
import Removal from './Removal.png'
import fb from './fb.png'
import insta from './insta.png'
import x from './x.png'
import youtube from './youtube.png'
import whatsapp from './whatsapp.png'

export const Rhome = () => {
    return (
<div className="bg-green-50 w-[100%] h-[1500px]">
    <img class="h-24 w-80" src={logor} alt="recharge station logo"/>

    <div className="absolute right-5 top-5 text-2xl">
        <Link to='/Rec' className="text-lime-500 font-bold ml-10 underline">RECHARGE</Link>
        <Link to='/Rhome' className="text-lime-500 font-bold ml-10 underline">HOME</Link>
        <Link to='/About' className="text-lime-500 font-bold ml-10 underline">ABOUT</Link>
        {/* <Link to='/Contact' className="text-lime-500 font-bold ml-10 underline">CONTACT</Link> */}
        <Link to='/Login' className="text-lime-500 font-bold ml-10 underline">LOGIN</Link>
    </div>

    <img className="drop-shadow-lg h-72 w-80 absolute left-[30%]" src={tu33} alt="i1"/>
    <img className="drop-shadow-lg h-48 w-72 absolute right-[10%]" src={tu3} alt="i1"/>
    <img className="drop-shadow-lg h-36 w-48 absolute right-[20%] top-[70%]" src={tu3} alt="i1"/>
    <p className='absolute top-[30%] text-indigo-900 font-bold ml-20 text-7xl'>Your one stop ultimate</p>
    <p className='absolute top-[50%] left-[10%] text-indigo-900 font-bold ml-20 text-7xl'>destination for all your</p>
    <p className='absolute top-[70%] left-[20%] text-indigo-900 font-bold ml-20 text-7xl'>digital recharge needs !</p>

    <div>
        <img className='shadow-md shadow-black h-56 w-42 absolute top-[105%] left-[3%] bg-violet-800 p-2 rounded-2xl shadow-md' src={ph} alt="image1"/>
        <img className='shadow-md shadow-black h-56 w-42 absolute top-[105%] left-[22%] bg-violet-800 p-2 rounded-2xl' src={dish} alt="image1"/>
        <img className='shadow-md shadow-black h-56 w-42 absolute top-[105%] left-[78%] bg-violet-800 p-2 rounded-2xl' src={wifi} alt="image1"/>
        <img className='shadow-md shadow-black h-56 w-42 absolute top-[105%] left-[41%] bg-violet-800 p-2 rounded-2xl' src={land} alt="image1"/>
        <img className='shadow-md shadow-black h-56 w-42 absolute top-[105%] left-[59%] bg-violet-800 p-2 rounded-2xl' src={bill} alt="image1"/>

        <p className="absolute top-[147%] left-[39%] text-lime-500 font-bold">All recharges and more available !</p>
        <img className="h-5/6 w-5/12 absolute top-[155%]" src={Ellipse} alt="ig2" />
        <img className="h-5/6 w-5/12 absolute top-[155%]" src={Removal} alt="ig2" />
        <p className="absolute top-[171%] left-[30%] text-7xl text-lime-300 font-bold">Recharge Smarter</p>
        <p className="absolute top-[188%] left-[40%] text-7xl text-lime-300 font-bold">Save More</p>
        <p className="absolute top-[206%] left-[48%] text-7xl text-lime-300 font-bold">with Our Deals !</p>

        <Link to='/Rec' className="absolute top-[225%] left-[40%] text-blue-600 font-bold text-3xl">Click here to start Recharging!!</Link>
    </div>

    <footer className="absolute top-[240%] bg-green-500 h-48 w-full text-indigo-700 font-bold text-center">
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