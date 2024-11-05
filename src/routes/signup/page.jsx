import { useState, useCallback } from 'react';

import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Container, Form, FloatingLabel, Button } from 'react-bootstrap';

export default function SignupPage() {
  return (
    <Container className="min-vh-100  d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: '100%', maxWidth: 640 }}>
        <h3 style={{ alignSelf: 'start' }}> Register</h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" required />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" required />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingNickname"
          label="nickname"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="별명을 입력하여 주세요."
            required
          />
        </FloatingLabel>

        <Button
          className="w-100"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          회원가입
        </Button>
      </div>
    </Container>
  );
}
