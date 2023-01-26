import {useState} from 'react'
import 
function Review({ review, handleDelete, handleSubmit }) {
    const [viewEditForm, toggleEditForm] = useState(false);
    
    const toggleView = () => {
        toggleEditForm(!viewEditForm);
    };
    
    const {title, rating, reviewer, content, id} = review;
    return (
      <div className="Review">
       
{
 viewEditForm ? (
<ReviewForm
 reviewDetails={review}
 toggleView={toggleView}
 handleSubmit={handleSubmit}/>
 ) : (
 <div>
 <h4>
 {review.title} <span>{review.rating}</span>
 </h4>
 <h5>{review.reviewer}</h5>
 <p>{review.content}</p>
 </div>
 )
}
      </div>
    );
  }
  
  export default Review;