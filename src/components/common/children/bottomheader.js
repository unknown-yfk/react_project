import {  Menu } from "antd"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from "react-router-dom";

    


        const items = [

          {
            label: 'Courses',
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

        // const { Link } = Anchor;
        
        return (
  
          <>
          
              <div className="mobileHidden">  
                <div className="header2">
                    <Menu mode="horizontal" defaultSelectedKeys={['Home']}
                                breakpoint="lg"
                                collapsedWidth="0">
                    <Menu.Item><Link to="/"> Home</Link></Menu.Item>
                    <Menu.Item><Link to="/trail"></Link>Contact Us</Menu.Item>
                    <Menu.Item><Link to="/gallery"></Link>Gallery</Menu.Item>
                    <Menu.Item> <Link to="/about"></Link>About Us</Menu.Item>
                          <Dropdown
                            menu={{ items }}>
                            <a>
                              <Space>
                              <Menu.Item> <Link to="/services">Service</Link> <DownOutlined />
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
