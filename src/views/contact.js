import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber,Divider } from 'antd';
import TitleBar from '../components/TitleBar';

const { Paragraph, Text } = Typography;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: { xs: { span: 6 }, sm: { span: 16, offset: 4 }, md: { span: 12, offset: 8 }, lg: { span: 16, offset: 4 } }
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
      <Row gutter={[16, 16]}
      >
        <Col span={16} 
         xs={24} xl={12} >
        <Text> <h1> Get in touch with us</h1></Text>
        <Paragraph> <h5>Veniam consequat sunt sint elit tempor enim. Mollit exercitation.</h5> 
           </Paragraph>
           <Image
            preview={false}
              width={280}
              height={250}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
               />
        </Col>
        <Col span={8} 
         xs={24} xl={12}  >
          <Form  {...layout}>
            <Form.Item
            {...tailLayout}
            >
          <Text> <h3 > Put Your Information here</h3></Text>
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
        </div>      

    </>
  )
}

export default Trail
