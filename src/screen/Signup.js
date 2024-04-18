import { useState } from 'react'
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
const shadow={width:"50%",padding:"3rem","boxShadow":" rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",borderRadius:"45px"}

function Signup() {
let nevigate=useNavigate()
    const [credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("https://steadofoods.onrender.com/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
            
        })
        const json =await response.json()
            // console.log(json)
            if(json.success)
            {
                alert("Account has been created login with email id")
                nevigate('/login')
            }
            if(!json.success)
            {
                alert("Enter Valid Credentials")
            }
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <>
     <div className='container col-12 col-md-6 col-lg-12'  style={{marginTop:"5rem",display:"flex",justifyContent:"center"}}>
        <div style={shadow}>
        <form onSubmit={handleSubmit}>
        <h2 className='border-bottom'>Signup</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control"name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                <input type="text" className="form-control"name="geolocation" value={credentials.geolocation} onChange={onChange}/>
            </div>
            <button type="submit" className="m-3 btn btn-primary">Submit</button>
            <div className='fw-bold'> Have an account ?
            <Link to="/login" className='m-3 btn btn-danger fw-bold'>Sign In</Link>
            </div>
        </form> 
        </div>
     </div>
    </>
  )
}

export default Signup
