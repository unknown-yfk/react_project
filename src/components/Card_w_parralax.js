import React from 'react'
import {Row, } from 'antd'
import Card from 'antd/es/card/Card'
const sample="hello";

const Card_w_parralax = () => {
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
            img:sample,
            title:"Location",
            label:"About",
            key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7'
        },
        
    ]
    return (
    
    <div >

        <Row gutter={[16,16]} justify='center' wrap="false" style={{marginTop:"5%", backgroundImage: "url(https://source.unsplash.com/random)",
           
           backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin:"15% 0 15% 0",
            backgroundSize: "cover",}}
         >
        {
        items.map((data) => {
            return(
                <Card hoverable= {false} bordered={"false"} bodyStyle={{padding:3}} style={{background: "rgba(255, 255, 255, 2)",margin:"5% 3%",maxWidth:300,border:"0",borderRadius:"10%"}} cover={
                    <img style={{maxHeight:"",borderRadius:"10%"}} src='/assets/images/sample2.jpg' alt="Services_list"></img>
                  }>
                    <h1 style={{fontFamily: "Montserrat", textAlign: "center",margin:"0px"}}>{data.title}</h1>
                    <p style={{fontFamily: "Montserrat", margin:"0 8% 8% 8%"}}>{data.key}</p>
                    

                </Card>
            )

        })
        }
    </Row>
    </div>
  ) 
}

export default Card_w_parralax
