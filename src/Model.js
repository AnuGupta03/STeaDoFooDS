import React from 'react'
import ReactDOM from 'react-dom'

const Modal_Style={
    postion:'fixed',
    top:"50%",
    left:"50%",
    backgroundColor:"rgb(208, 208, 208)",
    transform:"translate(5%,10%)",
    zIndex:1000,
    height:"90%",
    width:"90%"
}

const Overlay_Styles={
    position:"fixed",
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:"rgb(0,0,0,.7)",
    zIndex:1000
}

export default function Model({children,onClose}) {
  return ReactDOM.createPortal(
    <>
     <div style={Overlay_Styles}>
        <div style={Modal_Style}>
            <button className='btn bg-danger fs-4' style={{marginLeft:"90%",marginTop:"-35px"}} onClick={onClose}>X</button>
            {children}
        </div>    
    </div> 
    </>,
    document.getElementById('cart-root')
  )
}
