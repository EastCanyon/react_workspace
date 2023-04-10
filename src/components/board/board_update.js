import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { boardActions } from "../../reduxs/actions/board_action";

const BoardUpdate = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { num } = useParams();

  const [inputs, setInputs] = useState({
    subject: "",
    content: "",
    filename: null,
  });
  const { subject, content, filename } = inputs;

  const board = useSelector((state) => state.board.boardDetail);

  const pv = useSelector((state) => state.board.pv);

  useEffect(() => {
    setInputs(board);
  }, []);

  const handleValueChange = (e) => {
    e.preventDefault();
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.files[0] });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("num", num);
    formData.append("subject", subject);
    formData.append("content", content);
    formData.append("currentPage", pv.currentPage);

    console.log("filename", filename);
    if (filename != null) formData.append("filename", filename);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("Authorization"),
      },
    };

    await dispatch(boardActions.getBoardUpdate(formData, config));

    setInputs({
      subject: "",
      content: "",
      filename: null,
    });

    navigator(`/board/list/${pv.currentPage}`);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setInputs(board);
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigator(-1);
  };

  return (
    <form name="frm">
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <tbody>
          <tr>
            <th width="20%">글쓴이</th>
            <td>
              {board["membersDTO"] ? board["membersDTO"]["memberName"] : null}
            </td>
            <th width="20%">등록일</th>
            <td>{board.reg_date}</td>
          </tr>

          <tr>
            <th>제목</th>
            <td colSpan="3">
              <input
                type="text"
                name="subject"
                id="subject"
                defaultValue={board.subject}
                value={subject}
                onChange={handleValueChange}
              />
            </td>
          </tr>

          <tr>
            <th>내용</th>
            <td colSpan="3">
              <textarea
                name="content"
                id="content"
                rows="13"
                cols="40"
                value={content}
                onChange={handleValueChange}
              ></textarea>
            </td>
          </tr>

          <tr>
            <th>첨부파일</th>
            <td colSpan="3">
              <input
                type="file"
                name="filename"
                id="filepath"
                onChange={handleFileChange}
              />
              <span>
                {board.upload
                  ? board.upload.substring(board.upload.indexOf("_") + 1)
                  : null}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={handleUpdate}>
        수정
      </button>
      <button className="btn btn-primary" onClick={handleReset}>
        취소
      </button>
      <button className="btn btn-primary" onClick={handleBack}>
        뒤로
      </button>
    </form>
  );
};

export default BoardUpdate;
