import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const navigateRegister = (e) => {
        navigate('/home');
    }
    return (
        <div>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='d-flex'><span className='mx-2'>Don’t have an account?</span> <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                    <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
                </Form>
            </div>
        </div>
    );
};

export default Login;