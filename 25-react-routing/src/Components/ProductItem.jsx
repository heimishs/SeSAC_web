import { Link } from "react-router-dom";

export default function ProductItem({ products }) {
  return (
    <Link to={"/product/" + products.id} className="ProductItem">
      <ul key={products.id}>
        <li>상품명:{products.name}</li>
        <li>판매자 이메일:{products.email}</li>
        <li>상세설명:{products.body.slice(0, 80)}...</li>
      </ul>
    </Link>
  );
}
