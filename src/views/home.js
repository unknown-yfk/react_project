import { Anchor, Row, Col, Image, Typography,Divider } from 'antd';
// import AppHero from '../components/home/hero';
import AppContent from '../components/AppContent';
import AppHero from '../components/home/hero';
import Card_w_parrallax from '../components/Card_w_parralax';
import Card_normal from '../components/Card_normal';
import TextImg from '../components/About/components/TextImg';
import imageList from '../components/About/imageList';
import text from '../components/About/text';
import Location from '../components/About/components/Location';
import TitleBar from '../components/TitleBar';

const { Paragraph, Text } = Typography;

const Home = () => {
  return (
   
    <div>
        {/* <AppHero/> */}
        {/* <AppHero/> */}
        <AppContent/>
              <div className="contactStyle">
              <Text style={{textAlign:'center'}}>
              <TitleBar text={'Our Institute History'}/>
              <Divider plain></Divider>
              </Text>
              </div>

  
        <TextImg class_name='ant-row2-b2t_home' title1 = "first title" textStyle={{marginLeft: '50px',
    marginRight: '50px', marginTop: '50px'}} hor = "2"  img = {imageList[0].location} par = {text[0].content} />
        <Card_w_parrallax/>
        <div className="contactStyle">
              <Text style={{textAlign:'center'}}>
              <TitleBar text={'Hello From Contact Us'}/>
              <Divider plain></Divider>
              </Text>
              </div>
        <Card_normal/>
        <div className='contenStyleTrail'>
        <Location  title = "title title" img = {imageList[4].location}/>     
        </div>
        


    </div>

  )
}

export default Home
