import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {Row, Col, Form, Image, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import AuthActions from '../../actions/auth';
import '../../styles/pages/Auth/login.scss';

function Login({
  isAuthenticated, 
  postLogin
}) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSumbit = (e) => {
    const payload = {
      email, password
    }

    console.log(payload)
    postLogin(payload);
  }

  useEffect(() => {
    isAuthenticated ? history.push('/dashboard') : history.push('/login');
  }, [isAuthenticated])
  return (
    <div className="login-container">
      <div className="title">
        <Image src="/images/logo.png" />
        <p>Login</p> <hr />
      </div>
      <div className="login-form">
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              value={email}
              onChange={handleEmailChange} 
              placeholder="Email"
              type="email" 
              autoFocus
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange} 
              type="password"
              required 
            />
          </Form.Group>

          <Button
            className="squared" 
            variant="primary" 
            type="button"
            onClick={handleSumbit}
          >
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.app.authenticated,
})

const mapDispatchToProps = dispatch => ({
  postLogin: payload => dispatch(AuthActions.loginRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);