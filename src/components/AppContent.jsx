

import { Carousel , Button} from "antd";

import './img.css'

import { carousel1 } from './imgUrls'; 

function AppContent(){
  return(
      <div>
           
       <Carousel autoplaySpeed={5000} dotPosition={'bottom'} dots={true} effect={'fade'} easing={'easeOut'}>
       <div className="container">
       <div className="image1">
       <div className="overlay">


          <div className="carouselStyle"> 

         
 <h1 style={{fontSize: '5vw', marginTop: "15%", fontFamily:'poppins'}}>{carousel1[0].title}</h1>
 <p style={{fontSize: '2vw', fontFamily:'poppins'}}> {carousel1[0].content}</p>
 
 {/* <button className="gradient-hover-effect" >Join Today</button> */}
    <Button  className="buttonCarousel" type="primary" size="large" style={{background:'#7f29B8'}}>
     Join Today
    </Button>
    

     </div>



          <div className="carouselStyle2"> 

 <p style={{fontSize: '2vw', fontFamily:'poppins'}}> {carousel1[0].content}</p>
 {/* <button className="gradient-hover-effect" >Join Today</button> */}
   

     </div>

    </div>
     </div>
     </div>
 
     <div className="image2">

      <div className="carouselStyle3">

    <p style={{marginTop: "20%",fontSize: '2vw', fontFamily:'poppins'}}> {carousel1[1].content}</p>
    
      </div>
    </div>
    
     <div className="image3 ">
      <div className="carouselStyle4">

    <h1 style={{marginTop: "10%", fontSize: '5vw',fontFamily:'poppins'}}>{carousel1[2].title}</h1> 
    <p style={{fontSize: '20px', fontFamily:'poppins'}}> {carousel1[2].content}</p>
    
      </div>

          <div className="carouselStyle5">

    <p style={{fontSize: '30px', fontFamily:'poppins'}}> {carousel1[2].content}</p>
    
      </div>
     </div>
     
   </Carousel>
  
   </div>
  );
 }
 export default AppContent;