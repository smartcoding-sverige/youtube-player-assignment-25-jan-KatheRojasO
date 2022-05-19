import React, { useState, MouseEvent} from 'react';
import logo from '../assets/logo.png';
import {Container, Row, Col, Form, Button, Figure} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login() {

  //login object that contains user and password. By default user and password are empty.
  const [login, setLogin] = useState({ user: '', password: '' });

  const navigate = useNavigate();


  /*This function connects the backend with the frontend through a mouse event. The user information is already in the
  database so once the user tries to login, the app will go to the DB and if the response is 200 it will allow the user
  to login, will give him a token to use during the session and will redirected him to the main page.*/

  const loginHandler = async (event: MouseEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      });

      if (response.status === 200) {
        const token = await response.json();
        sessionStorage.setItem('token', token);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    };
  }

  /* The username and password form controls are setting user and password on change. Login is deconstructing and then
  it sets username or password.
  Button is doing loginHandler on click*/

  return (
    <Container fluid style={{ objectFit: 'fill' }}>

        <Figure>
          <Figure.Image
              className='mt-5 d-block mx-auto img-fluid w-90 position-absolute top-10 start-50 translate-middle-x'
              width={171}
              height={180}
              alt='171x180'
              src={logo}
          />
        </Figure>
        <Row>
            <Col>
                <Form className="position-fixed top-50 start-50 translate-middle ">
                <p>
                  Log In!
                </p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    onChange={(e) => {
                      setLogin({
                        ...login,
                        user: e.target.value,
                      });
                    }} 
                    type="username" 
                    placeholder="Enter username"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    onChange={(e) => {
                      setLogin({
                        ...login,
                        password: e.target.value,
                      });
                    }}
                    type="password" 
                    placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={loginHandler} >
                  Log In
                </Button>
                  </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Login