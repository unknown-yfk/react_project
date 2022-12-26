import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber,Divider } from 'antd';
import TitleBar from '../components/TitleBar';
import Location  from '../components/About/components/Location';
import imageList from '../components/About/imageList';

const { Paragraph, Text } = Typography;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: { xs: { span: 6 }, sm: { span: 24, offset: 4 }, md: { span: 24, offset: 6 }, lg: { span: 24, offset: 4 } }
};



const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const Trail = () => {

  const onFinish = (values) => {
    console.log(values);
  };
  const { TextArea } = Input;
  return (
    <>



      <div className='contenStyleTrail'>
              <div className="contactStyle">
              <Text style={{textAlign:'center'}}>
              <TitleBar text={'Hello From Contact Us'}/>
              <Divider plain></Divider>
              </Text>
              </div>
      <Row>
        <Col   
         xs={{span:24}} sm={{span:24}} md={{span:24}} lg={{span:14}} >
          <div className='contact_para'>
         <Text> <h1> Get in touch with us</h1></Text>
        <Paragraph> <h5>Veniam consequat sunt sint elit tempor enim. Mollit exercitation.</h5> 
           </Paragraph>
         
           <Image className='contact_Img'
            preview={false}
              width={350}
              height={300}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
               />
                </div>
        </Col>
        <Col xs={{span:24}} sm={{span:24}} md={{span:24}} lg={{span:10}} >
          <Form  {...layout}>
            <Form.Item
            {...tailLayout}
            >
          <Text> <h3> Put Your Information here</h3></Text>
            </Form.Item>
            <Form.Item 
            label="Name"
            name="Name">   
            <Input  placeholder="Name" />
            </Form.Item>

            <Form.Item 
            label="Email"
            name="Email">   
            <Input  placeholder="Email" />
            </Form.Item>

            <Form.Item
             label="Message"
             name="Message"
            >

            <TextArea rows={4} placeholder="Type your message here" maxLength={6} />

            </Form.Item>
            <Form.Item
            {...tailLayout}
            >
            <Button type="primary" style={{background:'#7f29B8'}} block>Send</Button>
            </Form.Item>
          </Form>
       
        </Col>




      </Row>




              <div className="contactStyle">
                  <Divider plain></Divider>
                  <Text style={{textAlign:'center'}}>
                  {/* <TitleBar text={'Contact Form'}/> */}
                      <h1 style={{marginLeft: '150px',
        marginRight: '150px', marginTop: '100px',fontFamily: 'Kalam', fontStyle:'italic',
        fontSize:" 16px", fontWeight: 500, lineHeight: "60px",textAlign: "center", 
        textTransform: "uppercase", textShadow: "0px 0px 1px rgb(122, 120, 120)"}}>
    “ Learning allows us to make sense of the world around us, the world inside of us, and where we fit within the world.”
      </h1>
                  </Text>
                <Location  title = "title title" img = {imageList[4].location}/>     
              </div>
        </div> 

        <h1 style={{marginLeft: '150px',
            marginRight: '150px', marginTop: '100px',fontFamily: 'Kalam', fontStyle:'italic',
            fontSize:" 16px", fontWeight: 500, lineHeight: "60px",textAlign: "center", 
            textTransform: "uppercase", textShadow: "0px 0px 1px rgb(122, 120, 120)"}}>
          “ When we improve our education and continue to learn, we can foster new connections, increase our marketable skills, and understand people better. ”
        </h1>


        

    </>
  )
}

export default Trail
