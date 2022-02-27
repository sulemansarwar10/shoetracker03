import React from 'react'
import { Outlet ,useNavigate } from "react-router-dom";
function Launch(props) {
    let navigate = useNavigate();
   // console.log(props.item)
    const data = props.item
    const keys = Object.keys(data)
    const launchclick = (e) => {
        navigate(`/launch/${e}`);
       // navigate(`/${e}`); // for render on other page
    }
    return (
        <div className='flex flex-wrap'>
            {keys.map((obj) => {
                let prod = data[obj]
                return (<div key={prod.id}>

                    <div className="w-64 m-10 text-center flex-col text-lg bg-slate-50 rounded-xl">
                        <img src={prod.img} alt={prod.name} className="rounded-xl" />
                        <label className=''>{prod.name}</label>
                        <br />
                        <label>Price {prod.price}</label>
                        <br />
                        <button className='bg-indigo-300 px-5 rounded-lg hover:bg-indigo-200'onClick={() => { launchclick(obj) }} >Launch Product</button>

                    </div>
                </div>)
            })
            }
                <Outlet />
        </div>
    )
}

export default Launch