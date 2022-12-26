import React from 'react'
import {Row, Col} from 'antd'
import Card from 'antd/es/card/Card'


const gridStyle=[{
    width:'30%',
    textAlign:'center'
}]

const Card_New = ({items}) => {
    
    return (
    
    <div >
{/* 
        <Row gutter={[16,16]} wrap="true" >
        {
        items.map((data) => {
            return(

                  <Col xs={{span:24}} sm={{span:24}} md={{span:24}} lg={{span:8}}>
                 
                <Card  bordered={"false"} bodyStyle={{color: "#333",fontFamily:'poppins', backgroundColor: "white", padding:"3%",textAlign:"left"}} 
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
                   
                  </Col>
            )

        })
        }
    </Row> */}
    
   
    <Row gutter={[16,32]}>
{

          items.map((data) => {
            return(
        <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:8}}>
             
                <Card  bordered={"false"} bodyStyle={{color: "#1d1d1d",fontFamily:'poppins', backgroundColor: "white", padding:"3%",textAlign:"left"}} 
                style=
                {{
                boxShadow:"5px solid #333",
                background: "rgba(255, 255, 255, 2)",
                margin:"auto",
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
        </Col>
            )

        })
        }

         
    </Row> 
    </div>


  ) 
}

export default Card_New
