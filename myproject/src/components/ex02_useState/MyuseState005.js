import { useState } from "react";

const MyuseState005 = () => {
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-000-0000",
  });

  const handleChange = (e) => {
    //setCustomer({ ...customer, [e.target.id]: e.target.value });

    //e.target으로부터 id, vaule를 추출한다.
    const { id, value } = e.target;
    setCustomer({
      ...customer, //기존의 customer 객체를 복사한 뒤
      [id]: value, //id키를 가진 값을 value로 설정
    });

    // setCustomer((prevState) => {
    //   return { ...prevState, [id]: value };
    // });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input
          type="text"
          value={customer.name}
          id="name"
          onChange={handleChange}
        />
      </p>

      <p>
        <span>주소</span>
        <input
          type="text"
          value={customer.address}
          id="address"
          onChange={handleChange}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type="text"
          value={customer.phone}
          id="phone"
          onChange={handleChange}
        />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyuseState005;
