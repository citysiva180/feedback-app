import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {

    const headerStyles = {
        backgroundColor:bgColor,
        color:textColor
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>
                    {/* This text is nothing but feedback UI nav bar */}
                    {text}  
                </h2>
            </div>
        </header>
    )
}

//Helps in giving a default value when value is not passed. 
Header.defaultProps = {
    text:"Feedback UI",
    bgColor:'rgba(0,0,0,0.4)',
    textColor:"#ff6a95"
}

//Helps in typechecking when a large number of data is getting passed.
Header.propTypes = {
    text:PropTypes.string
}

export default Header
