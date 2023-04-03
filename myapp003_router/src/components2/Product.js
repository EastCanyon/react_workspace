import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h2>상품 페이지</h2>
      <p>
        <Link to="/product/1">1 상품페이지입니다.</Link>
      </p>
      <p>
        <Link to="/product/2">2 상품페이지입니다.</Link>
      </p>
    </div>
  );
};

export default Product;
