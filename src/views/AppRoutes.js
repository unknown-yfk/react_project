
import Trail from "./contact";
import Gallery from "./gallery";
import Home from "./Home";


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
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
