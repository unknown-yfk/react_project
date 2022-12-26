import React from 'react'
import {Row, Card,} from 'antd'
import { SlGraduation } from 'react-icons/sl'
const items = [
  {
      img:"sample.PNG",
      title:"Location",
      label:"Home",
      key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7'
  },
  {
      img:"",
      title:"Location",
      label:"Contact us",
      key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7'
  },
  {
    
      img:"hello",
      title:"Location",
      label:"About",
      key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7'
  },
  {
      img:"hello",
      title:"Location",
      label:"Abou",
      key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7'
  },
  {
      img:"hello",
      title:"Location",
      label:"Ab",
      key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7'
  },
  {
      img:"hello",
      title:"Location",
      label:"A",
      key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7'
  },
 
  
]
const Card_normal = () => {
  return (
    <>
      <Row gutter={[16,16]} justify='center' wrap="false" style={{margin:"0.5% 1%",}}>
        {
        items.map((data) => {
            return(
                <Card hoverable= {false} bordered={"false"} bodyStyle={{padding:3}} style={{margin:"0.5% 1%",maxWidth:350,border:"0"}} cover={
                    <SlGraduation size={100} style={{paddingLeft:5}}/>
                  }>
                    <h1 style={{fontFamily: "Montserrat", textAlign: "center",margin:"0px"}}>{data.title}</h1>
                    <p style={{fontFamily: "Montserrat",fontSize:18, textAlign: "center",margin:"0px"}}>{data.key}</p>
                </Card>
            )

        })
        }
    </Row>
    </>
  )
}

export default Card_normal
