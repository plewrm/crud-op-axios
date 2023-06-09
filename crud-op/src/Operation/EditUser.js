import React,{useEffect, useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
const EditUser = () => {
    let navigate = useNavigate();
    const {id}= useParams();
    const [user, setUser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    })
const {name, username, email, phone, website}= user;
useEffect(()=>{
    loadUser();
    },[])

const loadUser = async ()=>{
    const result =await axios.get(`http://localhost:3000/user/${id}`);
    // console.log("Here see ", result);
setUser(result.data)
}

const onInputChange=async(e)=>{
setUser({...user,[e.target.name]:e.target.value})
}

const onSubmit = async (e)=>{
e.preventDefault();
await axios.put(`http://localhost:3000/user/${id}`,user);
navigate('/')
}

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            /><br></br>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            /><br></br>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            /><br></br>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            /><br></br>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            /><br></br>
          </div>
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  )
}

export default EditUser