import React from 'react';

// import MyNavbar from '~/components/MyNavbar/MyNavbar';
// import MyNavbar from '~/components/MyNavbar';
// import MyFooter from '~/components/MyFooter/MyFooter';
import { MyNavbar, MyFooter } from '~/components';

// import { Container } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function BoardListPage() {
  return (
    <div>
      <h1>Board List</h1>
      <p>This is BoardListPage</p>
      {/* <MyNavbar brandTitle="My-React-Board" />
      <Container className="min-vh-100">
        
      </Container>
      <MyFooter brandTitle="My-React-Board" /> */}
    </div>
  );
}
