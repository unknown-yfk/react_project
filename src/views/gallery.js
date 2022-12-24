import React, { useState } from 'react';
import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber, Space } from 'antd';
import { Card, Divider } from 'antd';
import TitleBar from '../components/TitleBar';
import Grider from '../components/Grider';
const { Meta } = Card;
const { Paragraph, Text } = Typography;

const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;






const Gallery = () => {


  return (
    <>
         <div className="">
            <Text style={{textAlign:'center'}}>
            <TitleBar text={'Hello From Gallery'}/>
            <h5>Est excepteur in tempor veniam. Consequat in est ad proident deserunt amet ea nostrud aliquip  culpa est reprehenderit ad nulla<br/> adipisicing incididunt  dolor ullamco duis occaecat. Exercitation velit cillum laboris id sunt proident laborum adipisicing.</h5>
            <Divider plain></Divider>
            </Text>
            <Grider/>
        </div>
    </>
  )
}

export default Gallery
