import React from 'react'
import {Typography,Row} from 'antd'
const style= {padding: "10px",
            borderBottom:"5px solid #E4A70E",
            borderRadius:"25% 25% 25% 25%",
            fontFamily: "Raleway,sans-serif", 
            fontSize:" 30px", fontWeight: 800, lineHeight: "72px", 
            margin: "0 0 24px", 
            textAlign: "center", 
            textTransform: "uppercase"}
const TitleBar = ({text}) => {
  return (
    <Row justify={"center"}>
      <h1
        
        
        style={style}
      >
        {text}
      </h1>
    </Row>
  )
}

export default TitleBar
