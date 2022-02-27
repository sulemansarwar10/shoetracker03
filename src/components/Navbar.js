import React from 'react'
import {
    Link
} from "react-router-dom";
function Navbar() {
    return (
        <div className="flex justify-between items-center bg-slate-800 text-slate-100 text-lg w-full">
            <div><h1 className='font-bold text-2xl select-none p-4'>Shopping Cart</h1>
            </div>
            <div  className='px-8'>
        
                    <Link className="hover:bg-slate-600 p-4 rounded-lg active:bg-slate-500 focus:outline-none focus:outline-2 focus:ring-violet-300" to='/'>Home</Link>
                    <Link className="hover:bg-slate-600 p-4 rounded-lg active:bg-slate-500 focus:outline-none focus:outline-2 focus:ring-violet-300" to='/launch'>Launch</Link>
                    <Link className="hover:bg-slate-600 p-4 rounded-lg active:bg-slate-500 focus:outline-none focus:outline-2 focus:ring-violet-300" to='/cart'>Cart</Link>
            </div>
        </div>
    )
}

export default Navbar