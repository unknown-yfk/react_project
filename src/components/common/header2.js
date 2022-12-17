import { Menu } from "antd"

const Header2 = () => {
  return (
    <div>
        <div className="header2">
             <Menu mode="horizontal" defaultSelectedKeys={['Home']}
                        breakpoint="lg"
                        collapsedWidth="0">
            <Menu.Item> Home</Menu.Item>
            <Menu.Item>Service</Menu.Item>
            <Menu.Item>Gallery</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>About Us</Menu.Item>

            </Menu>
          </div>
    </div>
  )
}

export default Header2
