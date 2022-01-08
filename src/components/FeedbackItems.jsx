import React from 'react'
import Card from "./Shared/Card"
import PropTypes from 'prop-types'
import {FaTimes} from "react-icons/fa"
function FeedbackItems({item, handleDelete}) {
    
   
    return (
        <Card reverse={true}>
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
