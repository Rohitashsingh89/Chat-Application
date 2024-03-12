import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const { login } = useContext(AuthContext);

    const Navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (inputs.email.trim() === "" || inputs.password.trim() === "") {
            toast.error('Email or Password are empty!!');
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}/api/auth/login`, inputs);

            if (response && response.data && response.data.success) {
                await login(inputs);
                toast.success("You are logged in successfully!!");
                Navigate('/chat');
            } else {
                // setErrorMessage('Invalid email or password');
                toast.error('Invalid email or password');
            }
        }
        catch (error) {
            if (error.response && error.response.status === 400 && error.response.data === "User is already logged in") {
                // Code to handle the case when already logged in
                toast.warning('You already logged in');
                // navigate('/dashboard')
            } else {
                toast.error('An error occurred during login');
            }
        }
    };



    return (
        <>
            <div>
                <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
            </div>

            <div className='formContainer'>
                <div className='formWrapper'>
                    <span className='logo'>Mern Chat</span>
                    <span className='title'>Login</span>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' />
                        <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' />
                        <button type='submit'>Login</button>
                    </form>
                    <p>You don't have an account? <Link to='/register'>Sign up</Link></p>
                </div>
            </div>

        </>
    )

}