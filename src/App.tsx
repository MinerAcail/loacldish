import { BrowserRouter as Router, Routes, Route } from "react-router";

import FoodDetailPage from "./pages/FoodDetailPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import Navbar from "./components/ui/custom/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/ui/custom/Footer";
import FoodGrid from "./components/ui/custom/foodgrid";
import LecturerProfile from "./pages/lecturer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/foods" element={<FoodGrid />} />

            <Route path="/food/:id" element={<FoodDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/lecturer" element={<LecturerProfile />} />

          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
