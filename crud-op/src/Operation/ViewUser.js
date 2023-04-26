import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ViewUser = () => {
    const [user,setUser]=useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    })

    const {id}=useParams();
    useEffect(()=>{
loadUser();
    },[])

    const loadUser=async()=>{
        const resp= await axios.get(`http://localhost:3000/user/${id}`)
        setUser(resp.data)
    }
  return (
<div className="container py-4">
    <Link to='/' className='btn btn-primary'>back to home</Link>
<h1 className="display-4">User Id : {id}</h1>
<hr/>
<ul className='list-group w-50'>
    <li className='list-group-item'>name : {user.name}</li>
    <li className='list-group-item'>UserName : {user.username}</li>
    <li className='list-group-item'>Email : {user.email}</li>
    <li className='list-group-item'>Phone : {user.phone}</li>
    <li className='list-group-item'>WebSite : {user.website}</li>
</ul>
</div>
  )
}

export default ViewUser