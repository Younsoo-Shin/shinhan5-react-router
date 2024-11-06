import React from 'react';
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';
// import useAuth from '~/lib/hooks/auth';
import useAuth from '~/lib/hooks/useAuth';

import { serverLogout } from '~/lib/apis/auth';

const EXPAND_BREAKPOINT = 'md';

export default function MyNavbar({ brandTitle, offCanvasTitle }) {
  // MyNavbar에서 Login되어있으면, (로그인,회원가입탭 X // 로그아웃탭 O)
  // MyNavbar에서 Login X, (로그인,회원가입탭 O // 로그아웃탭 X)
  const { user, clientLogout } = useAuth();
  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">{brandTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {offCanvasTitle || brandTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}
            >
              {!user ? (
                <>
                  <Nav.Link
                    as="div"
                    className="flex-grow-1 text-center border border-dark border-end-0"
                  >
                    <Link to="/login" state={{ redirect: 'redirectUri' }}>
                      로그인
                    </Link>
                  </Nav.Link>
                  <Nav.Link
                    as="div"
                    className="flex-grow-1 text-center border border-dark"
                  >
                    <Link to="/signup">회원가입</Link>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  as="div"
                  className="flex-grow-1 text-center border border-dark border-end-0"
                  onClick={() => {
                    serverLogout();
                    clientLogout();
                  }}
                >
                  로그아웃
                </Nav.Link>
              )}
            </Nav>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">게시판</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
