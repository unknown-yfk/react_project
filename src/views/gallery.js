import React, { useState } from 'react';
import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber, Space } from 'antd';
import { Card, Divider } from 'antd';
const { Meta } = Card;
const { Paragraph, Text } = Typography;

const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;

  // const gallerys = [
  //   {

      



  //   }
  // ];


  const tailLayout = {
  wrapperCol: { xs: { span: 6 }, sm: { span: 16, offset: 4 }, md: { span: 12, offset: 8 }, lg: { span: 16, offset: 4 } }
};





const Gallery = () => {

    const [size, setSize] = useState('small');


    const [visible, setVisible] = useState(false);
    const onChange = (e) => {
      setSize(e.target.value);
    };


  return (
    <>
         <div className='contenStyleTrail'>
            <Text style={{textAlign:'center'}}><h1>Hello from Gallery</h1>
            {/* <Divider plain></Divider> */}
            <Paragraph> <h5>Veniam consequat sunt sint elit tempor enim.
                 Mollit exercitation nulla esse 
            nostrud nisi ex sit Lorem culpa eu cillum Lorem nisi.</h5> 
           </Paragraph>
            </Text>


            {/* <div className="site-card-border-less-wrapper">
              </div> */}

              <Divider plain></Divider>
              <div className="site-card-border-less-wrapper">
               <Row>
               
                    <Row gutter={[16, 48]}>
                         <Col span={12}  xs={8} xl={12}>
                         <Image className='grid-img1'
                         
                         src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp'></Image>

                         </Col>  
                         

                         <Col span={6} xs={8} xl={6}>
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></Image>
                         
                         </Col>  
                           <Col span={6} xs={8} xl={6}>
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'></Image>
                         
                         </Col>                             
                    </Row>


                    <Divider orientation="left"></Divider>

                    <Row gutter={[16, 48]}>
                          <Col span={6} xs={8} xl={6}>

                              
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'></Image>
                         </Col>

                          <Col span={6} xs={8} xl={6}>     
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></Image>

                        
                         </Col>
                    
                          <Col span={12} xs={8} xl={12}>
                         <Image  className='grid-img2'
     
                         src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp'></Image>

                         </Col>        
                    </Row>

                           <Divider orientation="left"></Divider>

                           <Row gutter={[16, 48]}>
                         <Col span={7} xs={8} xl={7}>
                          <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'></Image>

                         </Col>  
                          <Col span={10} xs={8} xl={10}>
                         <Image className='grid-img3'
                         
                         src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp'></Image>

                         </Col> 

                          <Col span={7} xs={8} xl={7}>
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></Image>

                         </Col>    
                    </Row>


                    <Divider orientation="left"></Divider>

                    <Row gutter={[16, 48]}>
                          <Col span={6} xs={8} xl={6}>          
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'></Image>
                         </Col>

                          <Col span={6} xs={8} xl={6}>     
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></Image>

                        
                         </Col>
                    <Col span={6} xs={8} xl={6}>          
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'></Image>
                         </Col>

                          <Col span={6} xs={8} xl={6}>     
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></Image>

                        
                         </Col>
                    
                                 
                    </Row>

                    <Divider orientation="left"></Divider>

                    <Row gutter={[16, 48]}>
                         <Col span={8} xs={8} xl={8}>
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp'></Image>

                         </Col>  
                          <Col span={8} xs={8} xl={8}>
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp'></Image>

                         </Col> 

                         <Col span={8} xs={8} xl={8}>
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp'></Image>

                         </Col>    
                    </Row>
     
               </Row>
                       <Divider orientation="left"></Divider>
                          


              </div>







         </div>



    </>
  )
}

export default Gallery
