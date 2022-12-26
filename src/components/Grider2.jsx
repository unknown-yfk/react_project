import React from 'react'
import { Col, Divider, Row, Image } from 'antd';
import { content } from './imgUrls'; 

const span=[6,8,4,6,5,5,6,8,6,6,6,6,5,5,6,8]

const Grider2 = () => {
   
  return (

    <>
<Row style={{padding:"0 10% 0 10%"}} gutter={[8,8]}> 
    {
            content.map((data,i) =>{
                return(
 
<Col className="gutter-row" xs= {24} xl={span[i]} sm={12}>
    <Image alt={span[i]} style={{height:"300px",maxWidth:"100%"}} src={data.src}/>
      </Col>
                )
          })
        }
        </Row>

    </>
       
  )
  }
export default Grider2