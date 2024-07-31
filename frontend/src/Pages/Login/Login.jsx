import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../../context/StoreContext';

const Login = () => {

    const navigate=useNavigate()


    const {token,setToken,logOut,user}=useContext(StoreContext)

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(()=>{
        console.log(data)
    },[data])

    useEffect(()=>{
        console.log('Token: ',token)
    },[token])

    const submitHandler = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:4000/api/user/login', data);
            console.log(response.data); 

            if (response.data.success) {
                setToken(response.data.token)
                localStorage.setItem("token",response.data.token)
                window.alert("Login Successful!")
                navigate('/')
            } else {
                console.log("Login failed:", response.data.message);
            
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(()=>{
        console.log("The user details of who logged in:",user)
    })
    
    if(!token){
        return (
            <div className='login-page'>
                <div className="login-container">
                    <h2>LOGIN</h2>
                    <p>Please enter your email and password</p>
                    <form onSubmit={submitHandler}>
                        <input onChange={onChangeHandler} type='email' name='email' placeholder='Email' />
                        <input onChange={onChangeHandler} type='password' name='password' placeholder='Password' />
                        <button type='submit'>LOGIN</button>
                    </form>
                    <Link to='/register'><p>Don't have an account? Create One</p></Link>
                </div>
            </div>
        );   
    }
    else{
        return(
            <div className='yes-token'>
                <p onClick={()=>logOut()}>Logout</p>
                <h1>MY ACCOUNT</h1>
                <p>Welcome Back, {user.firstName}</p>
                <p>Reward Point Details</p>
                <div className="details">
                    <div className="orders">
                        <div>
                            <p>MY ORDERS</p>
                            <hr />
                        </div>
                        <p>You haven't placed any orders yet</p>

                    </div>
                    <div className="primary-address">
                        <div>
                            <p>PRIMARY ADDRESS</p>
                            <hr />
                        </div>
                        <p>{user.firstName} {user.lastName}</p>
                        <p>{user.address}</p>
                        <button className="address">EDIT ADDRESSES</button>
                    </div>
                </div>
            </div>
            
        )

    }
    
};

export default Login;
