import Breadcrumbs from '../components/Breadcrumbs';
import Steps from '../components/Steps';
import Review from '../components/Review';
import CommentSection from '../components/CommentSection';
import Share from '../components/Share';
import CardSection from '../components/CardSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductPage () {
    return (
<>
<Navbar/>
<div className='top-50'>
<Breadcrumbs/>
</div>


<div className="bg-gray-100 h-screen flex flex-col items-center justify-center" style={{height:'90vh'}}>
<Steps />
<div> <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row" style={{maxWidth:'80vw'}}>
        <div className="md:w-1/2 md:pr-8">
          <img
            src="https://wallpapers.com/images/hd/comic-book-background-a09lfl6egxpsqgwc.jpg" 
            alt="Product"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Product Name</h2>
          <p className="text-gray-600 mb-4">
           Product Description
          </p>
          <div className="flex flex-col items-start justify-between mb-4">
            <span className="text-2xl font-semibold">Price:$99.99</span>
            <button className="btn btn-primary mt-4">Add to Cart</button>
          </div>
          <div className="flex flex-col items-start justify-between ">
          <span className="text-gray-700 flex items-center mt-1">
                <Review/>: 41 reviews</span>
            <span className="text-gray-700 mt-1">Category: Marvel</span>
           
            
          </div>
        </div>
      </div>  
      </div>
      
    </div>
    <Share />
    <CommentSection/>
    <h2 className="text-2xl font-semibold mb-4 ml-4">You might also like...</h2>
    <CardSection/>
    <Footer/>
</>

    )
}