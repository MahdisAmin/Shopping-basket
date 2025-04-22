import { useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProduct } from "../context/ProductsContext";
import {ImSearch} from 'react-icons/im'

function ProductsPage() {
  const products = useProduct();
const [search, setSearch] = useState('')

  return (
    <>
      <div>
        <input type="text" placeholder="Search..." value={search} onChange={e=> setSearch(e.target.value.toLocaleLowerCase().trim())} />
        <button onClick={()=> {console.log("search");
        }}><ImSearch/></button>
        
      </div>
    <div className="flex justify-between">
      <div className="w-full flex flex-wrap justify-between ">
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
    </>
  );
}

export default ProductsPage;
