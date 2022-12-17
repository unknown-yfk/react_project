import React, { useState } from 'react';
import { Dropdown, Space, Drawer,Button } from 'antd';
import { Menu } from "antd"
import Link from "antd/es/typography/Link"
import Header2 from './header2';
import { Anchor, Row, Col } from 'antd';


// import {
//     StepBackwardOutlined
// } from '@ant-design/icons';


const AppHeader = () => {

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
                <a>Saint</a> Michael
            </div>  
            <Menu mode="horizontal" defaultSelectedKeys={['Home'] }
                        breakpoint="lg"
                        collapsedWidth="0">
                        <Space>
                        <Menu.Item><i className="fas fa-car"> </i> +2322343</Menu.Item>
                        <Menu.Item><i className="fas fa-bolt"> </i></Menu.Item>
                        <Menu.Item><i className="fas fa-phone"> </i></Menu.Item>
                        <Menu.Item><i className="fas fa-book"> </i></Menu.Item>
                       </Space>

        
            
                <div className='mobileVisible'>
              <Button type="primary" onClick={showDrawer}> <i className='fas fa-bars'></i> </Button>  
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

export default AppHeader
