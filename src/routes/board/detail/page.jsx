/**
 *
 * 게시글 하나하나마다 URL이 부여될 것.
 * ==> board._id 값
 */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBoardDetail } from '~/lib/apis/board';

export default function BoardDetailPage() {
  /**
   *  /board/:boardId
   *  :boardId 파라미터 받아오기.
   */

  // :boardId 처럼 url에서 변수 받아오기: useParams()

  //   const params = useParams();
  //   console.log(params);
  const { boardId } = useParams();

  const [board, setBoard] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchBoardDetail(boardId).then((data) => {
      setBoard(data);
    });
  }, [boardId]);

  // 게시글 상세조회:

  return (
    <div>
      <h3>{board.title}</h3>
      <div className="my-3">{board.content}</div>
    </div>
  );
}
