
import Trail from "./contact";
import Gallery from "./gallery";
import Home from "./Home";
import Services from "./Services";

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


      </Routes>
    </div>
  )
}

export default AppRoutes
