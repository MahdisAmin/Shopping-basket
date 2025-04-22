import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProduct } from "../context/ProductsContext";

function ProductsPage() {
  const products = useProduct();
  console.log(products);

  return (
    <div className="flex justify-between">
      <div className="w-full flex flex-wrap justify-between ">
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
