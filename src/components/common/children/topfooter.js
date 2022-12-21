import React from 'react'
import { Anchor, Row, Col, Image } from 'antd';
     const { Link } = Anchor;
     
const Topfooter = () => {
  
  
const items = [
    {
        key: '1',
        title: 'About Us',
        content: 'lorem ghghghjgh bbmbghjg',
        listTitle: [
            {
              name: 'about',
              href: '/about'
            },
            {
              name: 'sd',
              href: '/about'
            },
            {
              name: 'abosdsaut',
              href: '/about'
            },
            {
              name: 'aboaasasut',
              href: '/about'
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
            href: '/contact'
          },
          {
            name: 'aboSADSut',
            href: '/contact'
          },
          {
            name: 'aboDFGDFGut',
            href: '/contact'
          },
          {
            name: 'aboDFGERTGERut',
            href: '/contact'
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
            href: '/service'
          },
          {
            name: 'aboRTRTut',
            href: '/service'
          },
          {
            name: 'aboRTYRTut',
            href: '/service'
          },
          {
            name: 'aboRTYRut',
            href: '/service'
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

                            <li><Link href='{item.href}'>{item.name}</Link></li>
                            
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
