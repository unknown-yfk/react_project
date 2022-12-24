import React from 'react'
import {Card} from "antd";

import { Row } from 'antd';
import { cardItems } from './imgUrls'; 

const AppCard = () => {
  return (

    <div className="site-card-wrapper">
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <h1 style={{fontFamily: 'Montserrat', fontSize: '40px',textAlign: 'center', borderBottom: '5px solid #E4A70E' ,borderRadius: '25% 25% 25% 25% ', padding: '10px', margin: '0 0 24px' }}>Website development services</h1>
     
      </div>
      <p style={{textAlign: 'center', fontFamily: 'Montserrat', fontSize: '24px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
    <Row gutter={[16,16]} justify= "center" wrap='false'>
    {cardItems.map((data)=>{
      return(<Card  hoverable={true} style={{ fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '32px',
      lineHeight: '40px',
      textAlign: 'center',
      letterSpacing: '-0.015em',
      
      color: '#000000',
      margin:'4% 6% 0 6%',
       width: '400px', 
       height: '300px', 
       alignContent: 'center', 
       padding: '50px', boxShadow: '25px 22px 4px rgba(0, 0, 0, 0.25)', backgroundColor: '#EDEDED'}} >
      {data.title}
     </Card>)
      


    })
    }
     
   
     
    </Row>
  
  </div>
  )
}

export default AppCard;