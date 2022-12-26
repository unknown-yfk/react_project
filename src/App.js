import React from "react";
import './App.css';
import { Typography } from 'antd';
import { Layout } from 'antd';
// import { Dropdown, Space, Drawer,Button } from 'antd';
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import Trail from './views/contact';
import Gallery from "./views/gallery";
import AppRoutes from "./views/AppRoutes";

import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";
// import Link from "antd/es/typography/Link";



const { Title,Paragraph } = Typography;

// import AppHome from './views/home';
const Navbar = () => {
 
  };

const { Content } = Layout;

const App = () => {


  return (
    <>




      <Layout className="MainLayout">
        <AppHeader/>

  
      <Content className="contenStyle">
            <AppRoutes/>
            <Outlet/>
      </Content>

    <AppFooter/>
    </Layout>
   
    </>
    
  )
}

export default App
