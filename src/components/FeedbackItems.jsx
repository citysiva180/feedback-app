import React from 'react'
import Card from "./Shared/Card"
import PropTypes from 'prop-types'
import {FaTimes} from "react-icons/fa"

function FeedbackItems({item, handleDelete}) {
    
    //In this functional component we are displaying a single rating component. 
    //In the button class we are sending a function as a prop which is then invoked in the app.js components
    //For details on how the delete function works in app.js file please go there to check on the same 
    //Apart from this, we are displaying the rating and some text which is sharing the feedback on the same 
    //The reverse props in the Card component helps in reversing the color from white to dark shade of blue 
    // which is dark mode on this component
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={()=>handleDelete(item.id)}><FaTimes color="purple"></FaTimes></button>
            <div className="text display">{item.text}</div>
        </Card>
    )
}

Card.defaultProps = {
    reverse:false
}

Card.propTypes = {
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool.isRequired 
}

export default FeedbackItems
