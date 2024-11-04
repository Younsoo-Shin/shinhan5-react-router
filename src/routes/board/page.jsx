// import MyNavbar from '~/components/MyNavbar/MyNavbar';
// import MyNavbar from '~/components/MyNavbar';
// import MyFooter from '~/components/MyFooter/MyFooter';
import { MyNavbar, MyFooter } from '~/components';

// import { Container } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { fetchBoardList } from '~/lib/apis/board';
import { ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

export default function BoardListPage() {
  const [boardList, setBoardList] = useState([]);
  useEffect(() => {
    fetchBoardList().then((data) => {
      setBoardList(data);
    });
  }, []);
  return (
    <div>
      <h1>Board List</h1>
      <ListGroup>
        {boardList.map((board) => (
          <Link key={board._id} to={`/board/${board._id}`}>
            <ListGroup.Item>{board.title}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
      {/* <MyNavbar brandTitle="My-React-Board" />
      <Container className="min-vh-100">
        
      </Container>
      <MyFooter brandTitle="My-React-Board" /> */}
    </div>
  );
}
