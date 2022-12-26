import React, { useState } from 'react';
import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber, Space } from 'antd';
import { Card, Divider } from 'antd';
import TitleBar from '../components/TitleBar';
import Grider2 from '../components/Grider2';
// import AppContent from '../components/AppContent';
const { Meta } = Card;
const { Paragraph, Text } = Typography;

const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;






const Gallery = () => {


  return (
    <>

         <div className='contenStyleTrail'>
            <Text style={{textAlign:'center'}}>
                    <TitleBar text={'Hello From Gallery'}/>
                         <Divider plain></Divider> 
                  <Paragraph> <h5>Veniam consequat sunt sint elit tempor enim.
                      Mollit exercitation nulla esse 
                  nostrud nisi ex sit Lorem culpa eu cillum Lorem nisi.</h5> 
                </Paragraph>
            </Text>
          </div>
                      <Grider2/>
                    </>
  )
}

export default Gallery
