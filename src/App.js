import React,  { useState } from "react";
import './App.css';
import Trail from './components/common/trail'
import { Divider, Typography } from 'antd';
import { Footer } from "antd/es/layout/layout";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AppHeader from "./components/common/header";
import Header2 from "./components/common/header2";
import { Dropdown, Space, Drawer,Button } from 'antd';
import AppFooter from "./components/common/footer";
import Topfooter from "./components/common/topfooter";
import {
  Routes,
  Route
} from "react-router-dom";


const { Title,Paragraph } = Typography;

// import AppHome from './views/home';
const Navbar = () => {
 
  };

const { Header,Content } = Layout;

const App = () => {


  return (
    <>

<Layout>
  <Layout className="headerLayout">
      <Header>
       <AppHeader/>
      </Header>
  </Layout>   
    <Layout className="header2Layout">
      <Header>
       <Header2/>
      </Header>
    </Layout>

      
      {/* <Content className="contenStyle"> */}
        
          {/* <Title>mainContent</Title> */}
        {/* { <div
          className="site-layout-content">
          <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
        </Paragraph>
        </div> } */}

        {/* <Routes > 

          <Route path="/trail" element={ <Trail/>} />

        </Routes> */}


      {/* </Content> */}
      <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>

        <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>

    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>    
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>


        

        <Layout className="topFooter">
          <Footer>
          <Topfooter/>
          </Footer>
        </Layout>

        <Layout className="bottomFooter">
        <Footer>
          <AppFooter/>
      </Footer>
        </Layout>
    </Layout>
   
    </>
    
  )
}

export default App
