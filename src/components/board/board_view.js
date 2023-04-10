import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { boardActions } from "../../reduxs/actions/board_action";

const BoardView = () => {
  const { num } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("Authorization"),
    },
  };
  const boardDetail = useSelector((state) => state.board.boardDetail);
  //const boardFile = useSelector((state) => state.board.boardFile);

  const pv = useSelector((state) => state.board.pv);

  useEffect(() => {
    dispatch(boardActions.getBoardDetail(num, config));
  }, [dispatch, num]);

  //download
  const handleDownload = async () => {
    const boardFile = await dispatch(
      boardActions.getBoardDownload(boardDetail.upload)
    );

    //dispatch(boardActions.getBoardDownload(boardDetail.upload));

    const fileName = boardDetail.upload.substring(
      boardDetail.upload.indexOf("_") + 1
    );
    console.log(fileName);

    const url = window.URL.createObjectURL(new Blob([boardFile]), {
      type: "application/octet-stream",
    });

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    link.style.cssText = "display:none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(
      boardActions.getBoardDelete(num, {
        headers: { Authorization: localStorage.getItem("Authorization") },
      })
    );
    // window.location.replace(`/board/list/${pv.currentPage}`); //강제로 리프레시
    navigator(`/board/list/${pv.currentPage}`);
  };

  return (
    <div>
      <table className="table table-stribed" style={{ marginTop: 20 }}>
        <tbody>
          <tr>
            <th width="20%">작성자</th>
            <td>
              {boardDetail["membersDTO"]
                ? boardDetail["membersDTO"]["memberName"]
                : null}
            </td>
            <th width="20%">조회수</th>
            <td>{boardDetail.readcount}</td>
          </tr>

          <tr>
            <th>제목</th>
            <td colSpan="3">{boardDetail.subject}</td>
          </tr>

          <tr>
            <th>이메일</th>
            <td colSpan="3">{boardDetail.memberEmail}</td>
          </tr>

          <tr>
            <th>내용</th>
            <td colSpan="3" style={{ whiteSpace: "pre-line" }}>
              {boardDetail.content}
            </td>
          </tr>

          <tr>
            <th>첨부파일</th>
            <td colSpan="3">
              <button onClick={handleDownload}>
                {boardDetail.upload
                  ? boardDetail.upload.substring(
                      boardDetail.upload.indexOf("_") + 1
                    )
                  : null}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Link className="btn btn-primary" to={`/board/list/${pv.currentPage}`}>
        리스트
      </Link>
      <Link className="btn btn-primary" to={`/board/write/${num}`}>
        답변
      </Link>

      {localStorage.getItem("memberEmail") ===
      (boardDetail.memberEmail ? boardDetail.memberEmail : null) ? (
        <>
          <Link className="btn btn-primary" to={`/board/update/${num}`}>
            수정
          </Link>

          <button className="btn btn-primary" onClick={handleDelete}>
            삭제
          </button>
        </>
      ) : null}
    </div>
  );
};

export default BoardView;
