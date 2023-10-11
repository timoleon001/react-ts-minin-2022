import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pagas/ProductPage";
import { AboutPage } from "./pagas/AboutPage";
import { Naigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Naigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
