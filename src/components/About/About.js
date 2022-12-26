import React from 'react';
import './About_css.css';
import TextImg from './components/TextImg';
import text from './text';
import imageList from './imageList';
// import Location from './components/Location'
import TitleBar from './TitleBar';
import { Col, Row,Typography} from 'antd';
const {Title,Text,Paragraph} = Typography;

function About() {
 return (

  <div className='about_us'>
    {/* <span class="word">Schitt<span class="superscript">s</span> </span>
  <span class="word">Creek</span> */}
    <Row gutter={[16, 16]} className = 'new' >
<Col  lg={{span:10}}  > <TitleBar text = "WHO WE ARE"/></Col>
<Col  lg={{span:14}} sm={{span:24}} > <Paragraph style={{marginLeft: '100px',marginTop: '50px',fontSize:" 15px", fontWeight: 450,marginRight: '100px', textShadow: "1px 0px 1px rgb(122, 120, 120)"}} width={6000} className = "par1-col-b2t" type=''>  We are A community of lifelong learners, responsible global citizens, and champions of our own success. </Paragraph> </Col>
</Row>

    
     <TextImg  class_name = "ant-row2-b2t"  title1 = "First Title " hor = "1"  img = {imageList[0].location} par = {text[0].content} 
   title2 = "second title " img2 = {imageList[0].location} par2 = {text[0].content}
  />
  <h1 style={{marginLeft: '150px',
    marginRight: '150px', marginTop: '100px',fontFamily: 'Kalam', fontStyle:'italic',
    fontSize:" 20px", fontWeight: 500, lineHeight: "60px",textAlign: "center", 
    textTransform: "uppercase", textShadow: "0px 0px 1px rgb(122, 120, 120)"}}>
 “ Learning allows us to make sense of the world around us, the world inside of us, and where we fit within the world.”
  </h1>
  {/* <TitleBar style={{marginLeft: '100px',
    marginRight: '100px', marginTop: '100px'}} text = "“ Learning allows us to make sense of the world around us, the world inside of us, and where we fit within the world. “"/> */}

<TextImg title1 = "first title" hor = "2" class_name="ant-row2-b2t"  img = {imageList[0].location} par = {text[0].content} 
   title2 = "second title "  img2 = {imageList[0].location} par2 = {text[0].content}   textStyle={{marginLeft: '100px',
   marginRight: '100px', marginTop: '100px'}}
  />
  <h1 style={{marginLeft: '150px',
    marginRight: '150px', marginTop: '100px',fontFamily: 'Kalam', fontStyle:'italic',
    fontSize:" 20px", fontWeight: 500, lineHeight: "60px",textAlign: "center", 
    textTransform: "uppercase", textShadow: "0px 0px 1px rgb(122, 120, 120)"}}>
  “ When we improve our education and continue to learn, we can foster new connections, increase our marketable skills, and understand people better. ”
  </h1>
{/* <TitleBar style={{marginLeft: '100px',
    marginRight: '100px', marginTop: '100px'}} text = "“ When we improve our education and continue to learn, we can foster new connections, increase our marketable skills, and understand people better. “" />
   */}
  <TextImg title1 = "first title " class_name='ant-row2-b2t' hor = "3"  img = {imageList[0].location} par = {text[0].content} 
  />

  



   


  </div>
 )
}
export default About;
