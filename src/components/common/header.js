
import { Menu } from "antd"
import Link from "antd/es/typography/Link"
// import {
//     StepBackwardOutlined
// } from '@ant-design/icons';


const AppHeader = () => {

  return (


    <>
    <div className="container-fluid">
        <div className="header">
            <div className="logo">
                <i className="fas fa-bolt"></i>
                <a>Tech</a>
            </div>  
            <Menu mode="horizontal" defaultSelectedKeys={['Home']}
                        breakpoint="lg"
                        collapsedWidth="0">
            <Menu.Item key="home"><Link to="/trail">Home</Link> </Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="contact">contact</Menu.Item>
            <Menu.Item key="feature">Fe</Menu.Item>
            </Menu>
        </div>
   </div>




   </>

   



  )
}

export default AppHeader
