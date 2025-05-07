import Home from "../Pages/Home.jsx";
import NavBar from "../Components/NavBar.jsx";
import Services from "../Pages/Services.jsx";
import Contact from "../Pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contacts" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
