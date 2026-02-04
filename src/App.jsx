import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CategorySection from "./components/CategorySection";

export default function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
        <CategorySection/>
    </div>

    </BrowserRouter>
  );
}