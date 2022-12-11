
import propTypes from 'prop-types'
import Button  from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    // const onClick = () => {

    //     console.log('click')

    // }
    
    return (

        <header className="header">
            {/* <h1 style={{color:'red', backgroundColor:'black', padding:'20px'}}>Header {title} </h1> */}
            {/* <h1 style={headingStyle}>Header {title}</h1> */}

                <h1>{title}</h1>
                <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
                {/* <Button color="blue" text="click1"/>
                <Button color="red" text="click2"/> */}

             
        
        
        </header>
    )

}
// default props
Header.defaultProps = {
    title: 'Task Trackers',

}

// defining prop type
Header.propTypes = {

    title: propTypes.string.isRequired,
    
}

// css in javascript
// const headingStyle = {

//     color: 'red',
//     backgroundColor:'black',
//     padding:'20px'

// }



export default Header