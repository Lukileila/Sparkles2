import { useState } from 'react';
import Review from '../components/Review'

export default function CommentSection () {

   
      const [comment, setComment] = useState('');
      const [comments, setComments] = useState([]);
    
      const handleCommentChange = (e) => {
        setComment(e.target.value);
      };
    
      const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() !== '') {
          setComments([...comments, comment]);
          setComment('');
        }
      };
    
      return (
        <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <p className='flex items-center mb-4'><Review />: 41 Reviews</p>
      
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add a Review
        </button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded shadow">
            {comment.review}
            {comment.author}
            {comment.createdAt}
            {comment.title}
            {comment}
          </div>
        ))}
      </div>
    </div>
      );
    }
    