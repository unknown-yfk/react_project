import React from 'react'
import './About_css.css';
import {Typography,Row} from 'antd'
const style= {padding: "10px",
            borderBottom:"5px solid #E4A70E",
            borderRadius:"25% 25% 25% 25%",
            fontFamily: "Raleway,sans-serif", 
            fontSize:" 30px", fontWeight: 700, lineHeight: "60px", 
            margin: "100 100 24 24px", 
            textAlign: "center", 
            textTransform: "uppercase",
          marginLeft:"100px",
          textShadow: "1px 1px 2px black",
          Display: "block",

  animation: "show 0.02s forwards, pop-word 2s forwards",
  // animationTimingFunction: "cubic-bezier(0.14, 1.23, 0.33, 1.16)",
  opacity: "0",
  transform: "rotateX(120deg)",
  transformOrigin: "50% 100%"
        }

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