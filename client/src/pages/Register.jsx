import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Add from '../img/addAvatar.png';

export const Register = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        // files: '',
    });

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputs.username.trim() === "") {
            toast.error('Please enter a username');
            return;
        }

        if (inputs.email.trim() === "") {
            toast.error('Please enter an email');
            return;
        }

        if (inputs.password.length < 6) {
            toast.error('Password should be at least 6 characters long');
            return;
        }


        try {
            const response = await axios.post(`${BASE_URL}/api/auth/register`, inputs);
            if (response && response.data && response.data.success) {
                toast.success('You are Registered Successfully');

                setInputs({ username: '', email: '', password: '' });
                navigate('/login');
            } else {
                toast.error('Registration failed. ' + response.data.msg);
                if (response.data.msg === 'Email already exists') {
                    toast.error('This email is already registered. Please use a different email.');
                }
            }
        } catch (error) {
            toast.error('Registration failed!! Please try again');
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
                    <span className='title'>Register</span>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            value={inputs.username}
                            onChange={handleChange}
                            placeholder='Display name'
                        />
                        <input
                            type='email'
                            name='email'
                            id='email'
                            value={inputs.email}
                            onChange={handleChange}
                            placeholder='Email'
                        />
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={inputs.password}
                            onChange={handleChange}
                            placeholder='Password'
                        />
                        {/* <input
                            type="file"
                            name="file"
                            id="file"
                            value={inputs.files}
                            onChange={(e) => e.target.files[0]}
                            style={{ display: "none" }} />
                        <label htmlFor="file">
                            <img src={Add} alt="This is add avatar img" />
                            <span>Add an avatar</span>
                        </label> */}
                        <button type='submit'>Sign up</button>
                    </form>
                    <p>You already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </div>
        </>
    );
};
