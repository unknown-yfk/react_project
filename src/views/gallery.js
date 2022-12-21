import React, { useState } from 'react';
import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber, Space } from 'antd';
import { Card, Divider } from 'antd';
import TitleBar from '../components/TitleBar';
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
    <>
         <div className='contenStyleTrail'>
            <Text style={{textAlign:'center'}}>
              <TitleBar text={'Hello From Gallery'}/>
            
            {/* <Divider plain></Divider> */}
            <Paragraph> <h5>Veniam consequat sunt sint elit tempor enim.
                 Mollit exercitation nulla esse 
            nostrud nisi ex sit Lorem culpa eu cillum Lorem nisi.</h5> 
           </Paragraph>
            </Text>


            {/* <div className="site-card-border-less-wrapper">
              </div> */}

              <Divider plain></Divider>
              <div>
                  <Row>
                    <Row gutter={[8, 48]}>

                         <Col  xs={12} xl={12}>
                         <Image className='grid-img1'
                         
                         src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp'></Image>

                         </Col>  
                    
     
                         <Col xs={12} xl={6}>
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></Image>
                         
                         </Col>  
                           <Col xs={8} xl={6}>
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'></Image>
                         
                         </Col>                             
                    </Row>


                    <Divider orientation="left"></Divider>

                    <Row gutter={[8, 48]}>

                          <Col xs={8} xl={6}>  
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'></Image>
                         </Col>

                          <Col xs={8} xl={6}>     
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></Image>

                        
                         </Col>
                    
                          <Col xs={8} xl={12}>
                         <Image  className='grid-img2'
     
                         src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp'></Image>

                         </Col>        
                    </Row>

                           <Divider orientation="left"></Divider>

                           <Row gutter={[8, 48]}>

                           
                         <Col xs={8} xl={7}>
                          <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'></Image>

                         </Col>  
                          <Col  xs={8} xl={10}>
                         <Image className='grid-img3'
                         
                         src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp'></Image>

                         </Col> 

                          <Col xs={8} xl={7}>
                         <Image
                         src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></Image>

                         </Col>    
                    </Row>


                    <Divider orientation="left"></Divider>

                    <Row gutter={[8, 48]}>
                         
                         {
                    
                         gallerys2.map(gallery2 => {
                              return (

                              <Col xs={8} xl={6} >          
                              <Image  key={gallery2.key} 
                              src={gallery2.src}></Image>
                              </Col>  
                              )
                         })
                           
                           }
                                 
                    </Row>

                    <Divider orientation="left"></Divider>

                    <Row gutter={[8, 48]}>   

                    {
                        gallerys.map(gallery => {

                         // const {key}=item;

                          return(

                            <Col  xs={8} xl={8}>
                            <Image key={gallery.key}
                            src={gallery.src}></Image>
   
                            </Col>  
                            
                          )
                        })
                      }
                    
                    </Row>
     
               </Row>
                       <Divider orientation="left"></Divider>
                          


              </div>







         </div>



    </>
  )
}

export default Gallery
