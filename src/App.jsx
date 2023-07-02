import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/culinary-voyage" element={<Landing />} />
        <Route exact path="/culinary-voyage/menu" element={<Menu />} />
        <Route exact path="/culinary-voyage/location" element={<Location />} />
        <Route exact path="/culinary-voyage/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
