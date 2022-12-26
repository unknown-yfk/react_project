import React from 'react'
import { FloatButton } from 'antd';


const BottomFooter = () => {
  return (
    <>

    <div className='container-fluid'>
    <div className='footer'>
        <ul className='socials'>
           <li><a><i className='fab fa-facebook'></i></a></li> 
           <li><a><i className='fab fa-twitter'></i></a></li> 
           <li><a><i className='fab fa-linkedin'></i></a></li> 
           <li><a><i className='fab fa-instagram'></i></a></li> 
        </ul>
   
    <div className='copyright'>Ant Design ©2022 Created by SaintMic.</div>

    <FloatButton.BackTop />
      </div>
    </div>
    </>
  )
}

export default BottomFooter
