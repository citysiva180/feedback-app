import React,{useState} from 'react'
import Card from "./Shared/Card"
import Button from "./Shared/Button"
import RatingSelection from './RatingSelection'

function FeedbackForm({handleAdd}) {

    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(false)
    const [message,setMessage] = useState('')
    const [rating, setRating] = useState('')

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
