import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../../reduxs/actions/board_action";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TableRow from "./table_row";
import PageNavigation from "./page_nav";

const BoardList = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { currentPage } = useParams();

  const boardList = useSelector((state) => state.board.boardList);
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  );

  const getBoardList = (currentPage) => {
    dispatch(boardActions.getBoardList(currentPage));
    navigator(`/board/list/${currentPage}`);
    console.log("응애");
  };

  useEffect(() => {
    getBoardList(currentPage);
  }, []);

  return (
    <div>
      <Link className="btn btn-danger" to="/board/write">
        글쓰기
      </Link>

      <h3 className="text-center">게시판 목록</h3>

      <table className="table table-striped" style={{ marginTop: 20 }}>
        <colgroup>
          <col width="8%" />
          <col width="*" />
          <col width="12%" />
          <col width="12%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {boardList &&
            boardList.map((board) => {
              return <TableRow board={board} key={board.num} />;
            })}
        </tbody>
      </table>
      {pv ? <PageNavigation getBoardList={getBoardList} /> : ""}
    </div>
  );
};

export default BoardList;
