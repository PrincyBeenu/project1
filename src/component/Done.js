import React from 'react'
import { Link } from 'react-router-dom'
import preview from './preview.gif'
import logor from './logor.png'

export const Done = () => {

    return (
        <div className='bg-green-50 w-[100%] h-[500px]'>
           <div className='absolute top-[57%] text-center text-4xl bg-green-50 w-[100%] h-[500px] text-lime-500 font-bold'>
           Your Recharge has been successfully made !
            <br/> Thank You for choosing our service.</div>
            <img class="absolute top-[1%] left-[1%] h-24 w-80" src={logor} alt="recharge station logo"/>
            <img className='drop-shadow-lg absolute top-[15%] left-[39%] h-[40%] w-[20%]' src={preview} alt='gif'/>

            <Link className="drop-shadow-2xl absolute top-[75%] left-[42%] p-2 text-2xl no-underline bg-blue-600 text-white rounded" to='/Rhome'>return to HOME</Link>
            
        </div>
        
    );
    }