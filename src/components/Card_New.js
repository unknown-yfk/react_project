import React from 'react'
import {Row, } from 'antd'
import Card from 'antd/es/card/Card'


const gridStyle=[{
    width:'30%',
    textAlign:'center'
}]

const Card_New = ({items}) => {
    
    return (
    
    <div >

        <Row gutter={[16,16]} justify={{lg: 'center', md:'center',xs:"center",sm:"center",}} wrap="false" >
        {
        items.map((data) => {
            return(
                <Card  bordered={"false"} bodyStyle={{color: "#E4A70E", backgroundColor: "white", padding:"3%",textAlign:"left"}} 
                style=
                {{
                boxShadow:"5px solid #333",
                background: "rgba(255, 255, 255, 2)",
                margin:"5% 1%",
                maxWidth:350,
                
            }}
                
                cover={
                    <img style={{maxHeight:""}} src='/assets/images/sample2.jpg'></img>
                  }>
                    <div style={{width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center"}}>
                    <img src='/assets/images/sample2.jpg' style={{width:"30px", height:"30px", borderRadius:"50px"}}></img>
                    <small style={{marginLeft:"20%"}}>programming</small>

                    </div>
                    <div>
                        <h1 style={{margin:"0px"}}>{data.title}</h1>
                        <p style={{fontFamily:"Montserrat", margin:"",fontSize:18}}>{data.key}</p>
                    </div>
                    

                </Card>
            )

        })
        }
    </Row>
    </div>
  ) 
}

export default Card_New
