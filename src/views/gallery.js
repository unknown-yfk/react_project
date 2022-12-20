import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber } from 'antd';
import { Card, Divider } from 'antd';
import React, { useState } from 'react';
const { Meta } = Card;
const { Paragraph, Text } = Typography;



  // const gallerys = [
  //   {

      



  //   }
  // ];




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
            <Divider plain></Divider>
            <Paragraph> <h5>Veniam consequat sunt sint elit tempor enim.
                 Mollit exercitation nulla esse 
            nostrud nisi ex sit Lorem culpa eu cillum Lorem nisi.</h5> 
           </Paragraph>
            </Text>


            <div className="site-card-border-less-wrapper">
                {/* <Row gutter={48} >
                      <Col span={8}  xs={12} xl={8}>
                      <Image
                      width={300}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                           />
                      </Col>

                      <Col span={8}  xs={12} xl={8}>
                      <Image
                      width={300}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                           />
                      </Col>

                      <Col span={8}  xs={12} xl={8}>
                      <Image
                      width={300}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                           />
                      </Col>
                     
                </Row> */}
              </div>

              <Divider plain></Divider>
              <div className="site-card-border-less-wrapper">
                {/* <Row gutter={48}>
                  
                     
                      <Col span={8}  xs={12} xl={8}>
                       

                      </Col>
                </Row> */}





              <Row>
                  <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                  <Image
                      width={200}
                      height={200}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                           />
                  </Col>
                  <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                  <Image
                      width={200}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                           />
                  </Col>
                  <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                  <Image
                                           height={200}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                           />
                  </Col>
                  <Col xs={2} sm={4} md={6} lg={8} xl={6}>
                  <Image
                                           height={200}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                           />
                  </Col>
                </Row>
              <Row gutter={32}>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                  <Image
                      width={450}
                      height={200}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                           />
                  </Col>
                  <Col xs={20} sm={16} md={12} lg={8} xl={12}>
                  <Image
                      width={200}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                           />
                  </Col>

                </Row>
              </div>







         </div>



    </>
  )
}

export default Gallery
