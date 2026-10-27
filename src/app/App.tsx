import { Route, Routes } from "react-router-dom";
import Layout from "./features/shared/layout/Layout";
import Products from "./features/poducts/pages/Product";
import ProductDetail from "./features/poducts/pages/ProductDetail";
import CreateProduct from "./features/poducts/pages/CreateProduct";
import NotFound from "./features/shared/components/NotFound";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products/new" element={<CreateProduct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
