import React, { useState, MouseEvent} from 'react';
import logo from '../assets/logo.png';
import {Container, Row, Col, Form, Button, Figure} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [login, setLogin] = useState({ user: '', password: '' });
  const navigate = useNavigate();

  const loginHandler = async (event: MouseEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)
      });

      if (response.status === 200) {
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };


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