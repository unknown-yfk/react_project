
import {  Layout } from 'antd';
import TopHeader from './children/topheader';
import Header2 from './children/bottomheader';
const AppHeader = () => {

    const { Header } = Layout;
  return (
    <>
    <Layout className="headerLayout">
      <Header>
        <TopHeader/>
      </Header>
    </Layout>   

    <Layout className="header2Layout">
        <Header>
          <Header2/>
        </Header>
    </Layout>

    </>
  )
}

export default AppHeader
