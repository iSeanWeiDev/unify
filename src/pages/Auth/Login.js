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
  const [check, setCheck] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleCheckChange = (e) => {
    setCheck(e.target.checked)
  }

  const handleSumbit = (e) => {
    const payload = {
      email, password
    }
    postLogin(payload);
  }
  useEffect(() => {
    isAuthenticated ? history.push('/dashboard') : history.push('/login');
  }, [isAuthenticated])
  return (
    <div className="login-container">
      <div className="title">
        <Image src="/images/logo.png" />
        <p>Login</p>
      </div>
      <div className="login-form">
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              value={email}
              onChange={handleEmailChange} 
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
              onChange={handlePasswordChange} 
              type="password"
              required 
            />
          </Form.Group>

          <Row className="validation">
            <Col md={7}>
              <Form.Group controlId="checkbox">
                <Form.Check 
                  type="checkbox" 
                  value={check}
                  onChange={handleCheckChange}
                  label="I agree with terms of services" 
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Button
                className="squared" 
                variant="primary" 
                type="button"
                disabled={!check}
                onClick={handleSumbit}
              >
                LOGIN
              </Button>
            </Col>
          </Row>
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