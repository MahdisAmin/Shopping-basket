import { useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProduct } from "../context/ProductsContext";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

function ProductsPage() {
  const products = useProduct();
  const [search, setSearch] = useState("");
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLocaleLowerCase().trim();
    console.log(category);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
        />
        <button
          onClick={() => {
            console.log("search");
          }}
        >
          <ImSearch />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="w-full flex flex-wrap justify-between ">
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
