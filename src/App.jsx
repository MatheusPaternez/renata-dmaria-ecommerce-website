import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import About from "./components/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>  
        <Footer/>
        
      </div>

    </BrowserRouter>
  );
}