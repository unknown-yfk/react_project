
import Trail from "./contact";
import Gallery from "./gallery";
import Home from "./Home";
import Services from "./Services";
import About from "../components/About/About";

import {
    Routes,
    Route
  } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
        <Routes > 
        <Route path="/trail" element={ <Trail/>} />
        <Route path="/gallery" element={ <Gallery/>} />
        <Route path="/" element={ <Home/>} />
        <Route path="/services" element={ <Services/>} />
        <Route path="/about" element={<About />} />


      </Routes>
    </div>
  )
}

export default AppRoutes
