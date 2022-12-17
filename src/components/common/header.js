
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
            <Menu.Item><i className="fas fa-car"> </i> +2322343</Menu.Item>
            <Menu.Item><i className="fas fa-bolt"> </i></Menu.Item>
            <Menu.Item><i className="fas fa-phone"> </i></Menu.Item>
            <Menu.Item><i className="fas fa-book"> </i></Menu.Item>
            
          

            
            </Menu>
        </div>


        
   </div>




   </>

   



  )
}

export default AppHeader
