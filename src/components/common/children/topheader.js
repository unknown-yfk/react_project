import React, { useState } from 'react';
import { Space, Drawer } from 'antd';
import { Menu } from "antd"
import {  Image } from 'antd';
import { Link } from "react-router-dom";




const TopHeader = () => {

  const [open, setOpen] = useState(false);
        const showDrawer = () => {
          setOpen(true);
        };
        const onClose = () => {
          setOpen(false);
        };
        // const { Link } = Anchor;

        const hideNavigation = () => {
          setOpen(false);
        }
  return (


    <>
         <div className="container-fluid">
                     <div className="header">
                          <div className="logo">
                                <Image
                              preview={false}
                              width={100}
                              height={100}
                              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                              />
                                <a>Saint Michael</a>
                           </div>  

                              <Menu mode="horizontal" defaultSelectedKeys={['Home']}
                                  breakpoint="lg"
                                  collapsedWidth="0">
                                  <Space>
                                  <Menu.Item><i className="fas fa-mobile"> </i> +2322343</Menu.Item>
                                  <Menu.Item><i className="fab fa-facebook"> </i></Menu.Item>
                                  <Menu.Item><i className="fab fa-twitter"> </i></Menu.Item>
                                  <Menu.Item><i className="fab fa-linkedin"> </i></Menu.Item>
                                  </Space> 

                                  <Space>
                                  <div className='mobileVisible'>
                                      <Menu.Item >
                                      <a className='primary' onClick={showDrawer}>
                                        <i className='fas fa-bars' ></i> 
                                        </a>
                                      </Menu.Item>
                                   </div>
                              </Space>
                              </Menu>   
                       </div> 
                         
                    <div className='mobileVisible'>
                          <Drawer 
                          title="Drawer"
                          placement="right"
                          onClose={onClose} 
                          open={open}>                        
                              <Menu mode="vertical" defaultSelectedKeys={['Home']}
                                breakpoint="lg"
                                collapsedWidth="0" onClick={hideNavigation}>
                                <Menu.Item><Link to="/"> Home</Link></Menu.Item>
                                <Menu.Item><Link to="/trail"></Link>About Us</Menu.Item>
                                <Menu.Item><Link to="/gallery"></Link>Gallery</Menu.Item>
                                <Menu.Item>Contact</Menu.Item>
                              </Menu>
                          </Drawer> 
                    </div>
        
          </div>




   </>

   



  )
}

export default TopHeader


