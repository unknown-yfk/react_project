import React, { useState } from 'react';
import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber, Space } from 'antd';
import { Card, Divider } from 'antd';
import TitleBar from '../components/TitleBar';
import Grider from '../components/Grider';
const { Meta } = Card;
const { Paragraph, Text } = Typography;

const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;

  const gallerys = [
    {
     
          key: '1',
          src:'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp'
         
  
      },

      {
     
          key: '2',
          src:'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp'
         
  
      },

      {
     
          key: '3',
          src:'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp'
         
  
      },

  ];




  const gallerys2 = [
     {
      
           key: '1',
           src:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
          
          
   
       },
 
       {
      
           key: '2',
           src:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
         
          
   
       },
 
       {
      
           key: '3',
           src:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
          
   
       },
       {
      
          key: '4',
          src:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
        
         
  
      },
    
 
   ];




  const gallerys3 = [
     {
      
           key: '1',
           src:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
          
   
       },
 
       {
      
           key: '2',
           src:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
          
   
       },
 
       {
      
           key: '3',
           src:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
          
   
       },
       {
      
          key: '4',
          src:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
         
  
      },
    
 
   ];






//   const tailLayout = {

//   wrapperCol: { xs: { span: 8 }, xl: { span: 6 } },
//   wrapperCol2:  { xs: { span: 8 }, xl: { span: 12 } },
//   wrapperCol3:  { xs: { span: 8 }, xl: { span: 7 } },
//   wrapperCol4:  { xs: { span: 8 }, xl: { span: 10 } },
//   wrapperCol5:  { xs: { span: 8 }, xl: { span: 8 } }

// };







const Gallery = () => {

    // const [size, setSize] = useState('small');


    // const [visible, setVisible] = useState(false);
    // const onChange = (e) => {
    //   setSize(e.target.value);
    // };


  return (
    <Grider/>
  )
}

export default Gallery
