import React from 'react'
import {Card} from "antd";

import { Row, Col } from 'antd';
import { cardItems } from './imgUrls'; 
import { Typography,Divider } from 'antd';

const { Paragraph, Text } = Typography;


const AppCard = () => {
  return (

    <div className="site-card-wrapper">
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <h1 style={{fontFamily: 'Montserrat', fontSize: '40px',textAlign: 'center', borderBottom: '5px solid #E4A70E' ,borderRadius: '25% 25% 25% 25% ', padding: '10px', margin: '0 0 24px' }}>Website development services</h1>
     
      </div>

       <Paragraph style={{fontFamily:'poppins',textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium ab modi itaque odit iste possimus <br/> dolor suscipit vitae culpa fugaeligendi voluptatem nobis sunt ut rem veritatis dicta explicabo, autem obcaecati, </Paragraph>

     

    <Row gutter={[32,100]}  wrap='true'>
         {cardItems.map((data)=>{
           return(  
             <Col xs={{span:'24'}} sm={{span:'24'}} md={{span:'24'}} lg={{span:'12'}} >
      <Card  hoverable={true} style={{ fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '32px',
      lineHeight: '40px',
      textAlign: 'center',
      letterSpacing: '-0.015em',
      
      color: '#000000',
      margin:'auto',
      paddingTop:'auto',
       width: '400px', 
       height: '300px', 
       alignContent: 'center', 
       padding: '50px', boxShadow: '25px 22px 4px rgba(0, 0, 0, 0.25)', backgroundColor: '#EDEDED'}} >
      {data.title}
     </Card>
     
     
   </Col>
     )
      


    })
    }
     
 
     
    </Row>
  
  </div>
  )
}

export default AppCard;