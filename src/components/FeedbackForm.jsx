import React,{useState} from 'react'
import Card from "./Shared/Card"
import Button from "./Shared/Button"
import RatingSelection from './RatingSelection'

function FeedbackForm({handleAdd}) {

    //In this complex component we are declaring the state and the validations for the 
    //Form to add a feedback into the app. 
    //if you see, we have 4 states declared here. in future they would be updated via context api
    

    const [text,setText] = useState('') //Displays the feedback content
    const [btnDisabled,setBtnDisabled] = useState(false) //disables the button when no text is typed 
    const [message,setMessage] = useState('') //Message, setMessage helps in validating and alerting if user had typed less than 10 chars 
    const [rating, setRating] = useState('') //Rating and Set Rating will update the ratings in the feedback component


    //This is a form logic which will validate the text and update the button and message states respectively 
    const handleTextChange = (e) => {
        if (text === '') {
          setBtnDisabled(true)
          setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
          setMessage('Text must be at least 10 characters')
          setBtnDisabled(true)
        } else {
          setMessage(null)
          setBtnDisabled(false)
        }
    
        setText(e.target.value)
      }

    //Handle Submit gets an event e as a params. This event prevents the page from reloading 
    //on submitting the form. Note that handleAdd function is called with newFeedback added as a params
    //This is then evaluated in the app.js for re-rendering
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (text !== '' && text.trim().length > 10){
            const newFeedback = {
                text:text,
                rating:rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit} >
                <h2>How would you rate your service with us?</h2>
                <br/>
                {/* Add a rating select component*/}
                <RatingSelection select={(rating)=>setRating(rating)}></RatingSelection>
                <div className="input-group">
                    <input onChange={handleTextChange}  type="text" placeholder="Write a review" value={text} />
                    <Button type="submit" disabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
