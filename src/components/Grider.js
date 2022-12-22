import React from 'react';
import { Col, Divider, Row, Image } from 'antd';

const style = {
  background: '#0092ff',
  padding: '15px 0',
};
function Random()
{
    var x= Math.floor(Math.random() * 10+1)
    return x
}
var url= 'https://picsum.photos/500/400?random='
console.log(url);
const Grider = () => (
  <>
  {/* <Image style={{height:"500px",width:"100%"}}src={url+Random()}/> */}
    <Row style={{padding:"0 10% 0 10%"}} gutter={[5, 5]}>
      
    <Col className="gutter-row" xs= {24} xl={6} sm={12}>
    <Image style={{height:"300px",maxWidth:"100%"}}src={url+Random()}/>
      </Col>
      
      <Col className="gutter-row" xs= {24} xl={8} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      
      <Col className="gutter-row" xs= {24} xl={4} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      <Col className="gutter-row" xs= {24} xl={6} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>

      {/* NEXT */}

      
      
      <Col className="gutter-row" xs= {24} xl={5} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      
      <Col className="gutter-row" xs= {24} xl={5} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      
      <Col className="gutter-row" xs= {24} xl={6} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      <Col className="gutter-row" xs= {24} xl={8} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      {/* NEXT */}

      
      <Col className="gutter-row" xs= {24} xl={6} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      
      <Col className="gutter-row" xs= {24} xl={6} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      
      <Col className="gutter-row" xs= {24} xl={6} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      <Col className="gutter-row" xs= {24} xl={6} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      {/* NEXT */}

      <Col className="gutter-row" xs= {24} xl={5} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      
      <Col className="gutter-row" xs= {24} xl={5} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      
      <Col className="gutter-row" xs= {24} xl={6} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      <Col className="gutter-row" xs= {24} xl={8} sm={12}>
        <Image style={{height:"300px",width:"100%"}}src={url+Random()}/>
      </Col>
      {/* NEXT */}

      
    </Row>
  </>
);
export default Grider;

