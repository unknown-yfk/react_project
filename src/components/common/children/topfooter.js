import React from 'react'
// import { Col, Divider, Row, Space } from 'antd';
import { Anchor, Row, Col, Image } from 'antd';
     const { Link } = Anchor;
const Topfooter = () => {
  
  
// const items = [
//     {
//         key: '1',
//         title: 'About Us',
//         content: 'lorem ghghghjgh bbmbghjg',
//     },

//      {
//         key: '2',
//         title: 'Contact Us',
//         content: 'lorem ghghghjgh bbmbghjg',
//     },
//       {
//         key: '3',
//         title: 'Services',
//         content: 'lorem ghghghjgh bbmbghjg',
//     },
//     {
//         key: '4',
//         title: 'High performance',
//         content: 'lorem ghghghjgh bbmbghjg',
//     },

    

// ];

  return (
    
    <>

        <div className='topfooter'>

        <Row gutter={[32, 24]} className="gutter">
            {/* {items.map(item => {
                return (
                  //  <Space>
                    <Col span={6} key={item.key} >
                        <h1>{item.title}</h1>
                        {item.content}
                    </Col>
                    // </Space>
                 );
            })} */}

            
            <Col span={6} className="gutter-row">
              <h1>About Us</h1>
                      
          
                 <ul className='lists'>
                    <li><Link href="#part-1" title="Homeddddd" /></li> 
                    <li><Link href="#part-1" title="Aboutsdsd" /></li> 
                    <li><Link href="#part-1" title="Serviceadsad" /></li> 
                    <li><Link href="#part-1" title="peoplesada" /></li> 
                  </ul>
             
          
   
            </Col>

            <Col span={6} className="gutter-row">
                <h1>Contact Us</h1>
                <ul className='lists'>
                    <li><Link href="#part-1" title="Homesdsdsda" /></li> 
                    <li><Link href="#part-1" title="Aboutasaas" /></li> 
                    <li><Link href="#part-1" title="Serviceassasa" /></li> 
                    <li><Link href="#part-1" title="peoplesassad" /></li> 
                  </ul>
            </Col>

            <Col span={6} className="gutter-row">
                <h1>Services</h1>
                <ul className='lists'>
                    <li><Link href="#part-1" title="Homesdsdfs" /></li> 
                    <li><Link href="#part-1" title="Aboutsdfsf" /></li> 
                    <li><Link href="#part-1" title="Servicesfdsf" /></li> 
                    <li><Link href="#part-1" title="peoplessdfdsf" /></li> 
                  </ul>
            </Col>

            <Col span={6} className="gutter-row">
             <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
               />
               
            </Col>
         
        </Row>
    </div>

    
    </>
  )
}

export default Topfooter
