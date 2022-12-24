

import { Carousel, Button } from "antd";

import './img.css'
import { carousel1 } from './imgUrls'; 

function AppContent(){
 return(
     <div>
          
      <Carousel autoplay>
    
      <div className="image1" >
<h1 style={{marginTop: "10%", fontSize: '78px'}}>{carousel1[0].title}</h1>
<p style={{fontSize: '48px'}}> {carousel1[0].content}</p>
<button className="gradient-hover-effect">Join Today</button>
   
    </div>
    <div className="image2">
  
   <p style={{marginTop: "20%",fontSize: '48px'}}> {carousel1[1].content}</p>
  
   </div>
    <div className="image3">
   <h1 style={{marginTop: "10%", fontSize: '78px'}}>{carousel1[2].title}</h1> 
   <p style={{fontSize: '48px'}}> {carousel1[2].content}</p>
   
    </div>
    
  </Carousel>
 
  </div>
 );
}
export default AppContent;