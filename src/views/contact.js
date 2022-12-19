import { Anchor, Row, Col, Image, Typography,Button, Form, Input, InputNumber } from 'antd';

const { Paragraph, Text } = Typography;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
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
  return (
    <>



      <div className='contenStyleTrail'>
      <Row gutter={[16, 16]}>
        <Col span={12} >
        <Text> <h1> Get in touch with us</h1></Text>
        <Paragraph> <h5>Veniam consequat sunt sint elit tempor enim. Mollit exercitation nulla esse 
            nostrud nisi ex sit Lorem culpa eu cillum Lorem nisi.</h5> 
           </Paragraph>
           <Image
            preview={false}
              width={400}
              height={250}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
               />
        </Col>

        <Col span={12} >
        
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
        style={{marginTop:'40px'}}>
        <Text> <h3 style={{textAlign:'center', marginLeft:'125px'}}> Put your messages here</h3></Text>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea  rows={4}  maxLength={8} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>




        </Col>
      </Row>
        </div>      

    </>
  )
}

export default Trail
