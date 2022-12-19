import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber } from 'antd';
import { Card, Divider,  Radio, Tabs  } from 'antd';
import React, { useState } from 'react';
const { Meta } = Card;
const { Paragraph, Text } = Typography;

const Gallery = () => {

    const [size, setSize] = useState('small');
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
         </div>


{/* 
                <Card
            style={{
            width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card> */}


{/* 
     <div>

      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        tabPosition={'bottom'}

      >


        
      </Tabs>
    </div> */}

{/* 
            <Row gutter={[16, 24]}>
            <Col span={8} >
            <Card
            style={{
            width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            
        >
           
        </Card>
            </Col>
            <Col span={8} >
            <Card
            style={{
            width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
           
        </Card>
            </Col>
            <Col span={8} >
            <Card
            style={{
            width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
           
        </Card>
            </Col>

            </Row> */}
    </>
  )
}

export default Gallery
