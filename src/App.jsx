import "./App.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Bookform from "./pages/bookform";
import Unitedstates from "./pages/unitedstates";
import Unitedkingdom from "./pages/unitedkingdom";
import Canada from "./pages/canada";
import Newzealand from "./pages/Newzealand";
import Ireland from "./pages/Ireland";
import France from "./pages/France";
import Germany from "./pages/germany";
import Singapore from "./pages/Singapore";
import Dubai from "./pages/Dubai";
import Studyvisa from "./pages/Studyvisa";
import Workvisa from "./pages/workvisa";
import Visitvisa from "./pages/visitvisa";
import Medicalvisa from "./pages/medicalvisa";
import TouristVisa from "./pages/TouristVisa";
import Buisnessvisa from "./pages/businessvisa";
import PRvisa from "./pages/PRvisa";
import Dependentvisa from "./pages/dependentvisa";
import Temporaryvisa from "./pages/Temporaryvisa";
import Careercouselling from "./pages/careercouselling";
import Adminform from "./pages/adminform";
import Currentlyworking from "./pages/currentlyworking";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminPage from "./pages/adminpage";
import PrivateRoute from "./pages/privateroute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookform" element={<Bookform />} />
      <Route path="/destinations/USA" element={<Unitedstates />} />
      <Route path="/destinations/UK" element={<Unitedkingdom />} />
      <Route path="/destinations/Canada" element={<Canada />} />
      <Route path="/destinations/Newzealand" element={<Newzealand />} />
      <Route path="/destinations/Ireland" element={<Ireland />} />
      <Route path="/destinations/France" element={<France />} />
      <Route path="/destinations/Germany" element={<Germany />} />
      <Route path="/destinations/Singapore" element={<Singapore />} />
      <Route path="/destinations/Dubai" element={<Dubai />} />
      <Route path="/visa/studyvisa" element={<Studyvisa />} />
      <Route path="/visa/workvisa" element={<Workvisa />} />
      <Route path="/visa/visitvisa" element={<Visitvisa />} />
      <Route path="/visa/medicalvisa" element={<Medicalvisa />} />
      <Route path="/visa/touristvisit" element={<TouristVisa />} />
      <Route path="/visa/businessvisa" element={<Buisnessvisa />} />
      <Route path="/visa/PRvisa" element={<PRvisa />} />
      <Route path="/visa/dependentvisa" element={<Dependentvisa />} />
      <Route path="/visa/temporaryvisa" element={<Temporaryvisa />} />
      <Route path="/careercouselling" element={<Careercouselling />} />
      <Route path="/currentlyworking" element={<Currentlyworking />} />
      <Route path="/admin" element={<Adminform />} />
      <Route path="/adminhome" element={<PrivateRoute element={AdminPage} />} />
    </Routes>
  );
}

export default App;
