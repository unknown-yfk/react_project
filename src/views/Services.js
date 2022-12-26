
import AppContent from '../components/AppContent';
import AppHero from '../components/home/hero';
import Card_w_parrallax from '../components/Card_w_parralax';
import Card_normal from '../components/Card_normal';
import Tab_w_card from '../components/Tab_w_card';
import AppCard from '../components/AppCard';
import Title_o_Image from '../components/Title_o_Image/Title_o_Image'
import { Typography,Divider } from 'antd';
import TitleBar from '../components/TitleBar';


// const { Paragraph, Text } = Typography;

const Services = () => {
  return (
   
    <div>
        {/* <AppHero/> */}
          
        <Title_o_Image />
    
        <Tab_w_card/>
        
        <div style={{paddingTop:'100px'}}>
        <AppCard />
        </div>
        

    </div>

  )
}

export default Services
