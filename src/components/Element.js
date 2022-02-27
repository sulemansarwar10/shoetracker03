import React from 'react'
import { useParams } from "react-router-dom";

function Element(props) {
  let params = useParams();
  let prod = props.item[params.slug]
  //console.log(params, prod)
  if(prod)
  {

    return (
      <div>
      <div className="w-64 m-10 text-center flex-col text-lg bg-slate-50 rounded-xl">
        <img src={prod.img} alt={prod.name} className="rounded-xl" />
        <label className=''>{prod.name}</label>
        <br />
        <label>Price {prod.price}</label>
        <br />
        <button className='bg-indigo-300 px-5 rounded-lg hover:bg-indigo-200'>Remove Product</button>
      </div>
    </div>

)
}
else {
  return <div>Loading...</div>
}
}

export default Element