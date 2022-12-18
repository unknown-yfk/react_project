import { Anchor, Menu } from "antd"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Drawer,Button } from 'antd';
import AppHeader from "./topheader";
import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
    


        const items = [

          {
            label: 'Navigation One',
            key: 'mail',
            
          },

          {
            label: 'Navigation Two',
            key: 'app',
          },



          {
            label: 'Navigation Three',
            
            key: 'SubMenu',
          
            children: [
              {
                type: 'group',
                label: 'Item 1',
                children: [
                  {
                    label: 'Option 1',
                    key: 'setting:1',
                  },
                  {
                    label: 'Option 2',
                    key: 'setting:2',
                  },
                ],
              },
              
            ],
          },


        ];




      const Header2 = () => {

        const { Link } = Anchor;
        
        return (
  
          <>
          
              <div className="mobileHidden">  
                <div className="header2">
                    <Menu mode="horizontal" defaultSelectedKeys={['Home']}
                                breakpoint="lg"
                                collapsedWidth="0">
                    <Menu.Item> Home</Menu.Item>
                    <Menu.Item>About Us</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                    <Menu.Item>Contact</Menu.Item>
                          <Dropdown
                            menu={{ items }}>
                            <a>
                              <Space>
                              <Menu.Item> Service <DownOutlined />
                              </Menu.Item>  
                              </Space>
                            </a>
                          </Dropdown>
                    </Menu>
                  
          
                  </div>
              </div>  
                   
                  
               
          </>
        )
      }

export default Header2
