import React from 'react'
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singUpasync } from '../../Services/Action/auth.action';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'bootstrap';
import "../SingUp/SingUp.css"

import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { database } from '../../Services/MyFireBase/myfirebase';

// import { database } from '../../Services/MyFireBase/myfirebase';

function SingUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const [inputValue, setinputValue] = useState({
            email: "",
            password: ""
        });
console.log(inputValue,"inpput");


    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setinputValue({ ...inputValue, [name]: value })
    }
    // console.log(inputValue);

    const handleSubmit = (e) => {



        e.preventDefault();

        dispatch(singUpasync(inputValue));



    }


    return (
        <>

            <Container className="d-flex justify-content-center">

            <div class="form-box mt-5">
                        <form class="form" onSubmit={(e) => handleSubmit(e)}>
                            <span class="title">Sign up</span>
                            <span class="subtitle">Create a free account with your email.</span>
                            <div class="form-container">
                                {/* <input type="text" class="input" placeholder="Full Name"/> */}
                                <input type="email" name="email" class="input my-2" placeholder="Email" value={inputValue.email} onChange={(e) => handlechange(e)}/>
                                <input type="password" name="password" value={inputValue.password} class="input" placeholder="Password" onChange={(e) => handlechange(e)}/>
                            </div>
                            <button>Sign up</button>
                        </form>
                        <div class="form-section">
                            <p>Have an account <NavLink to={'/Singin'}>Login</NavLink></p>
                        </div>
                    </div>
                


            </Container>
        </>
    )
}

export default SingUp