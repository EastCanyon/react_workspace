import { useState } from "react";

const MyuseState006 = () => {
  const [customerList, setCustomerList] = useState([
    {
      name: "고수",
      address: "서울시 강남구",
      phone: "010-000-0000",
    },
    {
      name: "고수",
      address: "서울시 강남구",
      phone: "010-000-0000",
    },
  ]);

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    // setCustomer({ ...customer, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    //setCustomer({ ...customer, [name]: value });

    setCustomer((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleCommit = () => {
    setCustomerList([...customerList, customer]);
    setCustomer({
      name: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input
          type="text"
          value={customer.name}
          name="name"
          onChange={handleChange}
        />
      </p>

      <p>
        <span>주소</span>
        <input
          type="text"
          value={customer.address}
          name="address"
          onChange={handleChange}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type="text"
          value={customer.phone}
          name="phone"
          onChange={handleChange}
        />
      </p>

      <button onClick={handleCommit}>확인</button>

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>전화</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((element, idx) => {
            return (
              <tr key={idx}>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>{element.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyuseState006;
