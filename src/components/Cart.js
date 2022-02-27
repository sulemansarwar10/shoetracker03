import React from 'react'

function Cart(props) {
 // console.log(props.cart)
  const cartremove = (event) => {
  //  console.log(event)
    const data=props.cart.filter((obj)=>obj!==event)

    props.setcart(data)
  }

  if (props.cart.length === 0) {

    return (
      <div className='text-4xl text-center mx-32'><h1>Your Cart is empty</h1></div>
    )
  }
  else {
    return (
      <div className='flex flex-wrap'>
        {props.cart.map((obj) => {
          let prod = obj
          return (<div key={prod.id}>

            <div className="w-64 m-10 text-center flex-col text-lg bg-slate-50 rounded-xl">
              <img src={prod.img} alt={prod.name} className="rounded-xl" />
              <label className=''>{prod.name}</label>
              <br />
              <label>Price {prod.price}</label>
              <br />
              <button className='bg-indigo-300 px-5 rounded-lg hover:bg-indigo-200' onClick={() => { cartremove(prod) }}>Remove Product</button>
            </div>
          </div>)
        })
        }
      </div>

    )
  }
}

export default Cart