

import { Carousel } from "antd";

import './img.css'

import { carousel1 } from './imgUrls'; 

function AppContent(){
  return(
      <div>
           
       <Carousel autoplay autoplaySpeed={3800} >
       <div className="container">
       <div className="image1" >
       <div className="overlay">
 <h1 style={{fontSize: '5vw', marginTop: "20%"}}>{carousel1[0].title}</h1>
 <p style={{fontSize: '2vw'}}> {carousel1[0].content}</p>
 <button className="gradient-hover-effect" >Join Today</button>
    </div>
     </div>
     </div>
 
     <div className="image2">
    <p style={{marginTop: "20%",fontSize: '2vw'}}> {carousel1[1].content}</p>
    </div>
    
     <div className="image3">
    <h1 style={{marginTop: "10%", fontSize: '5vw'}}>{carousel1[2].title}</h1> 
    <p style={{fontSize: '3vw'}}> {carousel1[2].content}</p>
    
     </div>
     
   </Carousel>
  
   </div>
  );
 }
 export default AppContent;