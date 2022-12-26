import React from 'react'
import { Row, Col, Image } from 'antd';
import { Link } from "react-router-dom";
// const { Link } = Anchor;
     
const Topfooter = () => {
  
  
const items = [
    {
        key: '1',
        title: 'About Us',
        content: 'lorem ghghghjgh bbmbghjg',
        listTitle: [
            {
              name: 'about',
              to: '/trail'
            },
            {
              name: 'sd',
              to: '/about'
            },
            {
              name: 'abosdsaut',
              to: '/about'
            },
            {
              name: 'aboaasasut',
              to: '/about'
            },
            
        ]

    },

     {
        key: '2',
        title: 'Contact Us',
        content: 'lorem ghghghjgh bbmbghjg',
         listTitle: [
          {
            name: 'aboasaaut',
            to: '/contact'
          },
          {
            name: 'aboSADSut',
            to: '/contact'
          },
          {
            name: 'aboDFGDFGut',
            to: '/contact'
          },
          {
            name: 'aboDFGERTGERut',
            to: '/contact'
          },
        ]
    },
      {
        key: '3',
        title: 'Services',
        content: 'lorem ghghghjgh bbmbghjg',
         listTitle: [
          {
            name: 'ab34RT5E4Tout',
            to: '/service'
          },
          {
            name: 'aboRTRTut',
            to: '/service'
          },
          {
            name: 'aboRTYRTut',
            to: '/service'
          },
          {
            name: 'aboRTYRut',
            to: '/service'
          },
        ]
    },


    

];

  return (
    
    <>

        <div className='topfooter'>
        <Row gutter={[32, 24]} className="guttsader">
            {/* {items.map(item => {
              const {key,title,content,listTitle}=item;
                return (
                  //  <Space>
                    <Col span={6} key={key} className="gutter-row">
                        <h1>{title}</h1>
                        <ul className='lists'>
                        {
                            listTitle.map((item,index) => {
                              return(
                                  
                                <li key={index}><Link href={item.href}>{item.name}</Link></li>
                                )  
                            })
                          
                        }
                        </ul>
                        
                    </Col>
                    // </Space>
                 );
            })} */}


            {items.map(item => {
              const {listTitle, key}=item;
              return(
                <Col span={6} key={key}  className="gutter-row"
                xs={12} xl={6}>
                  <h1>{item.title}</h1>
                  <ul className='lists'>
                      {
                        listTitle.map(item => {

                          return(

                            <li><Link style={{color:'#333'}} to={item.to}>{item.name}</Link></li>
                            
                          )
                        })
                      }
                  </ul>
                </Col>
                
              )
              
            }

            )}
         
            <Col span={6} className="gutter-row">
             <Image
              width={200}
              preview={false}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
               />
               
            </Col>
         
        </Row>
    </div>

    
    </>
  )
}

export default Topfooter
