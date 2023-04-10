import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../apiurl";
import { useNavigate } from "react-router-dom";

const EditInfo = () => {
  const navigator = useNavigate();

  const [members, setMembers] = useState({
    memberEmail: "",
    memberPass: "",
    memberName: "",
    memberPhone: "",
  });

  const { memberEmail, memberPass, memberName, memberPhone } = members;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
  };

  const info = async () => {
    return await axios
      .get(`${baseUrl}/member/editinfo/${localStorage.memberEmail}`, config)
      .then((response) => {
        setMembers({ ...response.data, memberPass: "" });
      });
  };
  useEffect(() => {
    info();
  }, []);

  const [passwordCheck, setPasswordCheck] = useState("");

  const passChang = (e) => {
    e.preventDefault();
    if (memberPass !== e.target.value) setPasswordCheck("비밀번호 불일치");
    else setPasswordCheck("비밀번호 일치");
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    setMembers({ ...members, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${baseUrl}/member/update`, members, config);
    localStorage.setItem("memberName", memberName);
    //navigator('/');
    window.location.replace("/");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="container">
          <h1>회원가입</h1>
          <div className="form-group mb-1">
            <input
              type="email"
              className="form-control"
              name="memberEmail"
              placeholder="이메일"
              value={localStorage.memberEmail}
              readOnly
            />
          </div>
          <div className="form-group mb-1">
            <input
              type="password"
              className="form-control"
              name="memberPass"
              placeholder="비밀번호"
              value={memberPass}
              onChange={handleValueChange}
            />
          </div>

          <div className="form-group mb-1">
            <input
              type="password"
              className="form-control"
              name="memberPass2"
              placeholder="비밀번호 확인"
              onChange={passChang}
            />
            <span>{passwordCheck}</span>
          </div>

          <div className="form-group mb-1">
            <input
              type="text"
              className="form-control"
              name="memberName"
              placeholder="이름"
              value={memberName}
              onChange={handleValueChange}
            />
          </div>

          <div className="form-group mb-1">
            <input
              type="text"
              className="form-control"
              name="memberPhone"
              placeholder="연락처"
              value={memberPhone}
              onChange={handleValueChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            회원정보 수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInfo;
