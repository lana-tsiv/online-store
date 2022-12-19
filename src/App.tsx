import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home-page";
import "./styles/colors.css";
import "./styles/Footer.css";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/Not-found-page";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
