import React from "react";
import './App.css';
// import { Layout } from 'antd';
import Trail from './components/common/trail'
// import Title from "antd/es/skeleton/Title";
import { Divider, Typography } from 'antd';
import { Footer } from "antd/es/layout/layout";

import { Breadcrumb, Layout, Menu, theme } from 'antd';

import AppHeader from "./components/common/header";
import Header2 from "./components/common/header2";
import {
  Routes,
  Route
} from "react-router-dom";


const { Title,Paragraph } = Typography;

// import AppHome from './views/home';


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

      
      {/* <Content className="contenStyle">
        
          <Title>mainContent</Title>
        <div
          className="site-layout-content">
          <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
        </Paragraph>
        </div>

        <Routes > 

          <Route path="/trail" element={ <Trail/>} />

        </Routes>


      </Content>
 */}

      {/* <Footer>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>

    </>
    
  )
}

export default App
