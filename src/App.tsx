import { Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import "./styles/colors.css";
import "./styles/Footer.css";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/product-card/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
