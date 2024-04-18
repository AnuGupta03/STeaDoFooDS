import React, { useState ,useRef, useEffect } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

const shadow={
  "boxShadow":" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
}
export default function Card(props) {

  let dispatch =useDispatchCart();
  let data=useCart();
  let options=props.options;
  let priceOptions =Object.keys(options)
  const priceRef = useRef();
  const [qty,setQty]=useState(1)
  const [size,setSize]=useState("")
  const handleAddToCart=async()=>{
    let food=[]
    for(const item of data)
    {
      if(item.id===props.foodItem._id)
      {
        food=item;
        break;
      }
    }
    if(food!==[])
    {
      if(food.size===size)
      {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if(food.size!==size)
      {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        // console.log("Size different so simply ADD one more to the list")
        return
      }
      return 
    }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    // console.log(data)
  }
  let finalPrice =qty * parseInt(options[size])
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <div >
        <div className="card mt-3" style={{ width: "18rem" },shadow} >
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"200px",objectFit:"fill" }}/>
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">
              {props.foodItem.description} 
            </p>
            <div className="container w-100" style={{"display":"flex"}}>
              <select className="form-select m-2 h-100" aria-label="Default select example" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(10),(e,i)=>{
                    return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })} 
              </select>
              <select className="form-select m-2 h-100" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>
            </div>
            <div className="fw-bold">
                Total Price: {finalPrice}
            </div>
            <hr/>
            <button className="btn btn-success justify-center ms-2" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Added to Cart" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
  )
}
