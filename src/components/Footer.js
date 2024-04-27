import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div style={{ "background":"linear-gradient(180deg, white, rgb(0, 123, 143))"}}>
<div className="container">
  <footer className="py-5">
    <h1 style={{"fontFamily": "cursive",
    "fontSize": "xx-large"}}>STeaDoFooDS</h1>
    <div className="row border-top py-4 my-4">
      <div className="col-2">
        <h5>Features</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Contact</Link></li>
          <li className="nav-item mb-2"><Link to="/faqs" className="nav-link p-0 text-muted">Faqs</Link></li>
        </ul>
      </div>


      <div className="col-2">
        <h5>Social Link</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="https://github.com/AnuGupta03" className="nav-link p-0 text-muted">GitHub</Link></li>
          <li className="nav-item mb-2"><Link to="https://www.facebook.com/profile.php?id=100011710174102" className="nav-link p-0 text-muted">Facebook</Link></li>
          <li className="nav-item mb-2"><Link to="https://www.linkedin.com/in/anuradha-gupta-/" className="nav-link p-0 text-muted">LinkdIn</Link></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our STeaDoFooDS</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; 2024 STeaDoFooDS, A Food Ordering Website.</p>
    </div>
  </footer>
</div>
    </div>
    
  );
}
