import ProductItem from "../Components/ProductItem";

export default function ProductPage({ products }) {
  return (
    <>
      <main className="ProductPage">
        <div>여기는 상품목록</div>
        {products?.map((products) => {
          return <ProductItem products={products} key={products.id} />;
        })}
      </main>
    </>
  );
}
