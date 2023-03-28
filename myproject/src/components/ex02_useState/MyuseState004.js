import { useState } from "react";

const MyuseState004 = () => {
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-000-0000",
  });

  const handleName = (e) => {
    console.log(e.target.value);
    console.log(customer.address);
    // setCustomer({ ...customer, name: e.target.value });
    console.log(customer.address);

    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleAddress = (e) => {
    // setCustomer({ ...customer, address: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };

  const handlePhone = (e) => {
    // setCustomer({ ...customer, phone: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };
  return (
    <div>
      <p>
        <span>이름</span>
        <input type="text" value={customer.name} onChange={handleName} />
      </p>

      <p>
        <span>주소</span>
        <input type="text" value={customer.address} onChange={handleAddress} />
      </p>

      <p>
        <span>전화번호</span>
        <input type="text" value={customer.phone} onChange={handlePhone} />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyuseState004;
