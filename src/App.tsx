import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/colors.css";
import "./styles/Footer.css";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import Cart from "./pages/Cart";
import ProductDetailsPage from "./pages/ProductDetailsPage";
function App() {

    return (
        <div className="app-wrapper">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='/product-card' element={<ProductDetailsPage/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;