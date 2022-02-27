import React from 'react'

function Home(props) {
  //console.log(props.item)
  let d = []
  const data = props.item
  const keys = Object.keys(data)
  const cartclick = (event) => {

    if (!containsObject(event, props.cart)) {
      props.setcart([...props.cart, event])
    }
    //props.setitem(props.item);
  }

  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === obj.id) {
        return true;
      }
    }

    return false;
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
            {!containsObject(prod,props.cart)&&<button className='bg-indigo-300 px-5 rounded-lg hover:bg-indigo-200' onClick={() => { cartclick(prod) }}>Add to Cart</button>}
          </div>
        </div>)
      })
      }
    </div>

  )
}

export default Home