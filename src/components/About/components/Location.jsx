import React from 'react'
import { Typography,Avatar, List,Col,Row,Image,Divider} from 'antd';
// import imageList from '../imageList';
import iconList from '../iconList';
const {Title,Text,Paragraph} = Typography;



function Location(props) {
  return (
  <>
  <div className='map-container-b2t'>
  <Row gutter={[100]}>
  <Col  xs={{span:24}} sm={{span:24}} md={{span:24}} lg={{span:14}} > 
  <Image src={props.img}/>
  </Col>
  <Col  xs={{span:24}} sm={{span:24}} md={{span:24}} lg={{span:10}} > 
  <Title  level={3}>{props.title}</Title>
  
  <List
      itemLayout="horizontal"
      dataSource={iconList}
      renderItem={(item) => (
        <List.Item>
         
          <List.Item.Meta 
          avatar={<Avatar src={item.icon}/>}
          title={<a href="#">{item.title}</a>}
          description={item.description}
          />
        </List.Item>
      )}
    />
  </Col>
</Row>
</div>
 
    </>
  )
}

export default Location
