import React, { useState } from 'react';
import { Space, Drawer,Button } from 'antd';
import { Menu } from "antd"
// import Link from "antd/es/typography/Link"
// import Header2 from './bottomheader';
import { Anchor, Image } from 'antd';
import { Link } from "react-router-dom";
// import image1 from  '../../../assets/images/image1';






const TopHeader = () => {

  const [open, setOpen] = useState(false);
        const showDrawer = () => {
          setOpen(true);
        };
        const onClose = () => {
          setOpen(false);
        };
        const { Link } = Anchor;
  return (


    <>
    <div className="container-fluid">
        <div className="header">
            <div className="logo">
                {/* <i className="fas fa-car"></i> */}
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

                <div className='mobileVisible'>
                  <Space>
                    <Button className='primary' onClick={showDrawer}>
                  <i className='fas fa-bars' ></i> 
                    </Button>
                  </Space>
                 
                   <Drawer 
                  title="Drawer"
                  placement="right"
                  onClose={onClose} 
                  open={open}>                        
                        <Anchor>
                        <Link to="/" title="Home" />
                        <Link to="/trail" title="About Us" />
                        <Link to="/gallery" title="Service" />
                        <Link to="/" title="Gallery" />
                        <Link to="/" title="Contact" />
                        <Link to="/trail"> Gallery</Link>
                        </Anchor>
                   </Drawer> 
                   {/* <Header2 mode={"inline"}/> */}
          
                </div>
              
                  
            </Menu>
            
                
          
        </div>


        
   </div>




   </>

   



  )
}

export default TopHeader
