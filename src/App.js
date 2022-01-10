import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData"; //As of now, the feedback is comming from Feedback data json file
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
function App() {
  //The feedback state will send the feedback data to the components post fetching from data file
  //If you see the feedback data json file is imported here where the data is commming from

  const [feedback, setFeedback] = useState(FeedbackData);

  //Now the delete function is happening when the delete button is clicked in the child component
  //The child component passes the id and the event to the parent component App.js
  //But this is a scenario where the parent is getting from child. In this situation,we are accessing the
  //DOM window element

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Similar to delete, the add function is as well comming from the feedback form component.
  //But unlike delete, we dont need to access the window object to add the element.
  //In this case, the app passes the handleAdd and an Object with id to the child components to render the same.

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
