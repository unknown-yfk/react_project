import Topfooter from "./children/topfooter"
import BottomFooter from "./children/bottomfooter"
import { Layout  } from 'antd';

const AppFooter = () => {
    const { Footer} = Layout;
  return (
    <>
    <Layout className="goldenfooter">
        <Footer className="gfooter"/>
    </Layout>
    <Layout className="topFooter">
        <Footer>
            <Topfooter/>
        </Footer>
    </Layout>

    <Layout className="bottomFooter">
         <Footer>
          <BottomFooter/>
        </Footer>
    </Layout>
    </>
  )
}

export default AppFooter
