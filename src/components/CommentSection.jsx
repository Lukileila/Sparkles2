import { useState, useEffect } from 'react';
import Review from '../components/Review';
import { useParams } from 'react-router-dom';

const CommentSection = () => {
  const { productId } = useParams();
  const [comment, setComment] = useState({ title: '', review: '' });
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${productId}/comments`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setComments(data);
        } else {
          throw new Error('Failed to fetch comments');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        setComments([]);
      }
    };

    if (productId) {
      fetchComments();
    } else {
      setComments([]);
    }
  }, [productId]);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.title.trim() !== '' && comment.review.trim() !== '') {
      const newComment = { title: comment.title, review: comment.review };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setComment({ title: '', review: '' });
      setShowForm(false);
    }
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleCancelReview = (e) => {
    e.preventDefault();
    setShowForm(false);
    setComment({ title: '', review: '' });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <p className="flex items-center mb-4">
        {comments.length} Reviews: <Review />
      </p>

      <div className="mb-4">
        <form onSubmit={handleCommentSubmit}>
          {showForm && (
            <>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  name="title"
                  className="w-full p-2 border rounded buttonShadow"
                  placeholder="Enter a title..."
                  value={comment.title}
                  onChange={handleCommentChange}
                />
              </label>
              <label htmlFor="review">
                Review
                <input
                  type="text"
                  name="review"
                  className="w-full p-2 border rounded buttonShadow"
                  placeholder="Write your review..."
                  value={comment.review}
                  onChange={handleCommentChange}
                />
              </label>
              <label htmlFor="rating">Rating: <Review /></label>
            </>
          )}

          <div className="mt-4">
            {showForm ? (
              <>
                <button type="submit" className="btn btn-primary mr-2 text-white hover:bg-blue-700 buttonShadow">
                  Add
                </button>
                <button type="button" onClick={handleCancelReview} className="btn btn-secondary text-white hover:bg-gray-700 buttonShadow">
                  Cancel
                </button>
              </>
            ) : (
              <button type="button" onClick={handleAddReview} className="btn btn-primary mr-2 text-white hover:bg-blue-700 buttonShadow">
                Add a Review
              </button>
            )}
          </div>
        </form>
      </div>

      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.commentID} className="bg-white p-4 mb-4 mt-4 rounded shadow buttonShadow w-100">
              <h3>Rating: {comment.rating}</h3>
              <p>by {comment.author}</p>
              <p>Review: {comment.review}</p>
            </div>
          ))
        ) : (
          <p>No comments available for this product.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
