import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailePage from "./pages/DetailePage";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/404";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route index element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
