import React, { useState } from 'react';
import { Dropdown, Space, Drawer,Button } from 'antd';
import { Menu } from "antd"
import Link from "antd/es/typography/Link"
import Header2 from './bottomheader';
import { Anchor, Row, Col } from 'antd';




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
                <i className="fas fa-car"></i>
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
                        <Link href="#part-1" title="Home" />
                        <Link href="#part-2" title="About Us" />
                        <Link href="#part-3" title="Service" />
                        <Link href="#part-4" title="Gallery" />
                        <Link href="#part-5" title="Contact" />
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
