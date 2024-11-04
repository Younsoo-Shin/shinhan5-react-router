/**
 *
 * 게시글 하나하나마다 URL이 부여될 것.
 * ==> board._id 값
 */
import { useParams } from 'react-router-dom';

export default function BoardDetailPage() {
  /**
   *  /board/:boardId
   *  :boardId 파라미터 받아오기.
   */

  // :boardId 처럼 url에서 변수 받아오기: useParams()

  //   const params = useParams();
  //   console.log(params);
  const { boardId } = useParams();

  console.log(boardId);
  // 게시글 상세조회:
  return <div>BoardDetailPage</div>;
}
