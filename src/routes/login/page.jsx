import { useState, useCallback } from 'react';

import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Container, Form, FloatingLabel, Button } from 'react-bootstrap';
import { serverLogin } from '~/lib/apis/auth';
import useAuth from '~/lib/hooks/useAuth';
/**
 * http://localhost:5173/login?redirect=sample
 */

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();
  const { clientLogin } = useAuth();

  const onSubmitLogin = useCallback(() => {
    serverLogin({ email: userEmail, password: userPassword }).then((data) => {
      console.log(data);
      clientLogin(data);
      navigate('/');
    });
  }, [userEmail, userPassword, navigate]);

  return (
    <Container className="min-vh-100  d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: '100%', maxWidth: 640 }}>
        <h3 style={{ alignSelf: 'start' }}> Login</h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            value={userEmail}
            type="email"
            placeholder="name@example.com"
            required
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            value={userPassword}
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </FloatingLabel>

        <Button className="w-100" onClick={onSubmitLogin}>
          로그인
        </Button>
      </div>
    </Container>
  );
}
