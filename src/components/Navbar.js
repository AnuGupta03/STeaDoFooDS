import React, {useState} from "react";
// import PropTypes from "prop-types";
import { Link,useNavigate } from "react-router-dom";
import Model from "../Model";
import Cart from "../screen/Cart";
import {useCart } from "../components/ContextReducer";


const Navbar = (props) => {
const [cartView,setCartView]=useState(false);
const navigate = useNavigate();
let data=useCart();
const handleLogout=()=>{
  localStorage.removeItem("authToken");
  navigate("/")
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            STeaDoFooDS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{"fontFamily": "math"}}>
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" aria-current="page" to="/faqs">
                  Faqs
                </Link>
              </li>
              {(localStorage.getItem("authToken"))?
                <li className="nav-item fs-5">
                <Link className="nav-link" aria-current="page" to="/myOrder">
                  My Orders
                </Link>
              </li>
              :""
              }
            </ul>
            {!(localStorage.getItem("authToken"))?
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" aria-current="page" to="/login">
              SignIn
              </Link>
              <Link className="btn bg-white text-success mx-1" aria-current="page" to="/signup">
              Signup
              </Link>
            </div>
            :
            <div className="d-flex">
              <div >
              <Link className="btn bg-success text-white mx-1" aria-current="page"  onClick={()=>{setCartView(true)}}>
                My Cart
                {data.length!==0?<span className="badge text-bg-danger m-1">{data.length}</span>:""}
                
              </Link>
              </div>
              {cartView? <Model onClose={()=>{setCartView(false)}}><Cart></Cart></Model>:null}
              <div>
                <Link className="btn bg-danger text-white mx-1" aria-current="page" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </div>
              }
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
