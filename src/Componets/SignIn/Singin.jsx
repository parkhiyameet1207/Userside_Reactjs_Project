import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import { singInasync } from '../../Services/Action/auth.action';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { singInasync } from '../../Services/Action/auth.action';

function Singin() {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [inputValue, setinputValue] = useState(
        {
            email: '',
            password: ''
        }
    );


    const handlechange = (e) => {
        setinputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("dfsdfsdfsdfsdfsd");
        dispatch(singInasync(inputValue));

        navigate('/');


    }

    return (


        <>
            <Container className="d-flex justify-content-center">

                <div class="form-box mt-5">
                    <form class="form" onSubmit={(e) => handleSubmit(e)}>
                        <span class="title">Sign In</span>
                        <span class="subtitle">Create a free account with your email.</span>
                        <div class="form-container">
                            {/* <input type="text" class="input" placeholder="Full Name"/> */}
                            <input type="email" name="email" class="input my-2" placeholder="Email" value={inputValue.email} onChange={(e) => handlechange(e)} />
                            <input type="password" name="password" value={inputValue.password} class="input" placeholder="Password" onChange={(e) => handlechange(e)} />
                        </div>
                        <button>Sign In</button>
                    </form>
                    <div class="form-section">
                        <p>Have an alredy account <NavLink to={'/Singup'}>Sing Up</NavLink></p>
                    </div>
                </div>



            </Container>
        </>
    )
}

export default Singin