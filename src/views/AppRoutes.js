
import Trail from "./contact";
import Gallery from "./gallery";


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


</Routes>
    </div>
  )
}

export default AppRoutes
