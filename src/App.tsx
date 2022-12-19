import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home-page";
import "./styles/colors.css";
import "./styles/Footer.css";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/Not-found-page";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
