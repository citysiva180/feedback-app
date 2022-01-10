import {motion, AnimatePresence} from "framer-motion";
import React from 'react'
import FeedbackItem from  "./FeedbackItems"
import PropTypes from 'prop-types'
function FeedbackList({feedback, handleDelete}) {
    
    //This logic will check if any feedback is available. If its not,
    //Then it would display not feedback added 

    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    } 

    //In this component, we are displaying a list of feedbacks. Now each feedbacks have their own single component with props
    //The props passed are key, item and handleDelete which is a function that delete that feedback with the respective id 

    return (
        <div className="feedback-list">
            <AnimatePresence>
                
           {feedback.map((item)=>(
               <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}}exit={{opacity:0}}>

                   <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
               </motion.div>
           ))}
                </AnimatePresence>
        </div>
    )
}

// return (
//     <div className="feedback-list">
//        {feedback.map((item)=>(
//            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
//        ))}
//     </div>
// )

FeedbackItem.propTypes={
    feedback:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            rating:PropTypes.number.isRequired
        })
    )
    
}

export default FeedbackList
