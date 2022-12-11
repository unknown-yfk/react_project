
import propTypes from 'prop-types'

const Header = ({ title }) => {
    
    return (

        <header>
            {/* <h1 style={{color:'red', backgroundColor:'black', padding:'20px'}}>Header {title} </h1> */}
            {/* <h1 style={headingStyle}>Header {title}</h1> */}

                <h1>{title}</h1>
        
        
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