import React, { useEffect, useState } from 'react'
import "./Register.css"
import axios from "axios"

const Register = () => {

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    address:""
  })

  const onChangeHandler = (e) => {
    const name=e.target.name
    const value=e.target.value
    setData((prev)=>({...prev,[name]:value}))
  }

  const submitHandler = async(e) => {
    e.preventDefault()
    try{
      const response=await axios.post("http://localhost:4000/api/user/register",data)
      console.log(response)
      if(response.data.success){
        console.log("User added successfully!!")
      }
      else{
        console.log(response.data.message)
      }
    }
    catch(err){
      console.log(err)
      console.log(response.data.message)
    }
  }

  useEffect(()=>{
    console.log(data)
  },[data])
 

  return (
    <div className='login-page'>
        <div className="login-container">
            <h2>REGISTER</h2>
            <p>Please fill in the information below</p>
            <form onSubmit={submitHandler}>
                <input onChange={onChangeHandler} type='text' name='firstName' placeholder='First Name' />
                <input onChange={onChangeHandler} type='text' name="lastName" placeholder="Last Name" />
                <input onChange={onChangeHandler} type='email' name="email" placeholder="Email" />
                <input onChange={onChangeHandler} type='password' name="password" placeholder="Password" />
                <input onChange={onChangeHandler} type='address' name="address" placeholder="Address" />
                <button type='submit'><h2>CREATE MY ACCOUNT</h2></button>
            </form>
            <p>By creating an account, you agree to our <a href='https://www.blissworld.com/pages/terms-conditions' target='_blank'>terms</a> and <a href="https://www.blissworld.com/pages/privacy-policy" target='_blank'>privacy policy</a>.</p>
        </div>
    </div>
  )
}

export default Register