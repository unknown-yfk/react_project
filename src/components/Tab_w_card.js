import React from 'react'
import {Tabs} from 'antd'

import Card_New from './Card_New'
const items = [
    {
        img:"sample.PNG",
        title:"Basic computer skill",
        label:"Home",
        key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7 Ut ut eiusmod sint aliqua. Aliqua esse enim enim pariatur aute velit. Elit irure fugiat eiusmod voluptate irure. Do laborum consectetur irure et duis. Et magna laborum labore veniam qui sit adipisicing cupidatat enim cupidatat sit voluptate esse reprehenderit.'
    },
    {
        img:"",
        title:"Basic Programming",
        label:"Contact us",
        key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7 Nulla dolore sit excepteur ut id laborum qui aliquip in culpa quis est laboris. Nulla irure ea minim reprehenderit pariatur sunt aliqua est ipsum tempor ut nostrud. Et laborum Lorem fugiat fugiat magna labore eu nulla exercitation. Proident culpa veniam ut eu aute nostrud.'
    },
    {
        img:"hello",
        title:"Web Development",
        label:"About",
        key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7Aute ullamco nisi nostrud proident laboris cupidatat quis. Nisi incididunt reprehenderit aliqua sit mollit ipsum nulla laboris deserunt eiusmod. Dolor do occaecat dolore officia deserunt consequat culpa voluptate sit. Ipsum dolor laborum qui cillum commodo deserunt. Minim esse eu sunt ipsum proident.'
    },
    {
        img:"hello",
        title:"Database",
        label:"About",
        key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7Aute ullamco nisi nostrud proident laboris cupidatat quis. Nisi incididunt reprehenderit aliqua sit mollit ipsum nulla laboris deserunt eiusmod. Dolor do occaecat dolore officia deserunt consequat culpa voluptate sit. Ipsum dolor laborum qui cillum commodo deserunt. Minim esse eu sunt ipsum proident.'
    },
    {
        img:"hello",
        title:"Database",
        label:"About",
        key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7Aute ullamco nisi nostrud proident laboris cupidatat quis. Nisi incididunt reprehenderit aliqua sit mollit ipsum nulla laboris deserunt eiusmod. Dolor do occaecat dolore officia deserunt consequat culpa voluptate sit. Ipsum dolor laborum qui cillum commodo deserunt. Minim esse eu sunt ipsum proident.'
    },
    
    
]
const items2 = [
    {
        img:"sample.PNG",
        title:"Peachtree",
        label:"Home",
        key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7'
    },
    {
        img:"hello",
        title:"Web Development",
        label:"About",
        key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7Aute ullamco nisi nostrud proident laboris cupidatat quis. Nisi incididunt reprehenderit aliqua sit mollit ipsum nulla laboris deserunt eiusmod. Dolor do occaecat dolore officia deserunt consequat culpa voluptate sit. Ipsum dolor laborum qui cillum commodo deserunt. Minim esse eu sunt ipsum proident.'
    },
    {
        img:"hello",
        title:"Database",
        label:"About",
        key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7Aute ullamco nisi nostrud proident laboris cupidatat quis. Nisi incididunt reprehenderit aliqua sit mollit ipsum nulla laboris deserunt eiusmod. Dolor do occaecat dolore officia deserunt consequat culpa voluptate sit. Ipsum dolor laborum qui cillum commodo deserunt. Minim esse eu sunt ipsum proident.'
    },
    {
        img:"hello",
        title:"Database",
        label:"About",
        key:'100% online and self-paced. No set class schedules so you set the pace and study when you can 24/7Aute ullamco nisi nostrud proident laboris cupidatat quis. Nisi incididunt reprehenderit aliqua sit mollit ipsum nulla laboris deserunt eiusmod. Dolor do occaecat dolore officia deserunt consequat culpa voluptate sit. Ipsum dolor laborum qui cillum commodo deserunt. Minim esse eu sunt ipsum proident.'
    },

    
]
function onChange(key) {
    console.log(key)
}

const Tab_w_card = () => {
  
    return (
    <div style={{margin:"10% 5% 0 5%"}}>
        <Tabs style={{backgroundColor:"rgba(173, 216, 230,0.1)"}} tabPosition='top' animated={{tabPane: true}} type="card"
        defaultActiveKey="1"
        onChange={onChange}
        items={[
        {
            label: `Information Technology`,
            key: '1',
            children: <>
            <Card_New items={items}/>
            </>
        },
        {
            label: `Business and Economics`,
            key: '2',
            children: <>
            <Card_New items={items2}/>
            </>
        },
        
        ]}
    />
    </div>
  )
}

export default Tab_w_card
