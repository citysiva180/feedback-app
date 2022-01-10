import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {


    //This logic confirms on the average values in the component 
    let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

    //Average checked if the value has .0 after a whole number 
    average = average.toFixed(1).replace(/[.,]0$/,'')


    //Check for undefined then loading else, load the feedback stats. Stats will get a prop called feedback which is an object with 
    //rating and some text along with its id. here in this component, we are summating the rating to display an average 
    return (
        typeof feedback === "undefined"? <h1>"Loading"</h1>: <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4> 
        <h4>Average Rating : {isNaN(average)?0:average}</h4> 
       </div>
       
    )
}

FeedbackStats.propTypes = {
    feedback:PropTypes.array.isRequired
}

export default FeedbackStats
