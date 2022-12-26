import React from 'react'
import { Col, Row,Image,Typography} from 'antd';
const {Title,Paragraph} = Typography;


const TextImg = (props) => {
 const  hor = props.hor;
  
if (hor == "2"){

  return (

    <>
    {/* {{marginLeft: '100px', style={{fontFamily:'poppins'}}
    marginRight: '100px', marginTop: '100px'}} */}
    <Row className = {props.class_name} style={props.textStyle} gutter={[16,16]}>
    <Col lg={{span:12}} sm={{span:24}}><Image  height={props.Height}  className='img-bfd2t' src={props.img}/> </Col>
    <Col lg={{span:12}} sm={{span:24}} ><Paragraph style={{lineHeight:'2'}} width={400} className = "par1-col-b2t" type=''>  <Title style={{fontSize:'30px',textTransform:'uppercase',fontFamily:'poppins'}} level={5}>{props.title1}</Title>{props.par} </Paragraph> </Col>
  
    
    <Col   lg={{span:12}} sm={{span:24}}> <Paragraph  style={{lineHeight:'2'}}  width={400} className = "par1-col-b2t"type=''> <Title style={{fontSize:'30px',textTransform:'uppercase',fontFamily:'poppins'}} level={5}>{props.title2}</Title>{props.par2 }</Paragraph></Col>
    <Col   lg={{span:12}} sm={{span:24}} > <Image  height={props.Height}  className='img-b2t' src={props.img2}/>  </Col>
    </Row>
    </>
  )}


else if (hor =="3"){
    return (
<div  className={props.class_name} style={{marginLeft: '100px',
    marginRight: '100px', marginTop:'100px'}}>
<Row gutter={[16, 16]} style={{marginLeft: '10px',
    marginRight: '10px'}}>
<Paragraph  style={{lineHeight:'2'}} className = "par1-col-b2t"type=''>  <Title style={{fontSize:'30px',textTransform:'uppercase',fontFamily:'poppins'}}  level={5}>{props.title1}</Title> {props.par} </Paragraph>
</Row>

<Row   gutter={[16, 16]} style={{marginLeft: '10px',
    marginRight: '10px'}}>
<Image className='img-b2t' style={{width:"100%", height:"auto"}}   src={props.img}/> 
</Row>
</div>
)}

else if (hor == "1"){
  return (
<div className={props.class_name} style={{marginLeft: '100px',
    marginRight: '100px', marginTop:'30px'}}>
<div style={{marginLeft: '10px',
    marginRight: '10px'}}>
<Row gutter={[16, 16]} className = 'new'>
<Col lg={{span:10}} sm={{span:24}}  xs={{span:24}}> <Image   height={400} className='img-b2t'  src={props.img}/></Col>
<Col  className="#1" lg={{span:14}} sm={{span:24}} xs={{span:24}}> <Paragraph width={6000} className = "par1-col-b2t"  style={{lineHeight:'2'}} type=''> <Title style={{fontSize:'30px',textTransform:'uppercase',fontFamily:'poppins',lineHeight:'2'}}  level={5}>{props.title1}</Title> {props.par} </Paragraph> </Col>

<Col span={24}>
<Paragraph  style={{lineHeight:'2'}} className = "par1-col-b2t" type=''> {props.par} </Paragraph> 
</Col>


</Row>

<Row gutter={[16, 16]}>
 
</Row>
</div>
</div>
)}
  }


export default TextImg
