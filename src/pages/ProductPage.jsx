import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Steps from '../components/Steps';
/*import CommentSection from '../components/CommentSection';*/
import Share from '../components/Share';
/*import CardSection from '../components/CardSection';*/
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';



// eslint-disable-next-line react/prop-types
const ProductPage = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true); // Set loading state to true before making the API call
        const response = await fetch(`http://localhost:3000/products/${productId}`);
        if (response.ok) {
          const productData = await response.json();
          setSingleProduct(productData);
        } else {
          throw new Error('Failed to fetch product data');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setSingleProduct(null);
      } finally {
        setIsLoading(false); // Set loading state to false after the API call completes (success or error)
      }
    };
  
    if (productId) {
      fetchProduct();
    } else {
      setIsLoading(false);
    }
  }, [productId]);

  return (
    <>
      <NavbarLoggedIn />
      <div className='top-50'>
        <Breadcrumbs singleProduct={singleProduct} />
      </div>

      {isLoading ? (
        <div className='h-screen flex justify-center items-center'>
          <Spinner />
        </div>
      ) : singleProduct ? (
        <div className='bg-gray-100 flex flex-col items-center justify-center gap-10' style={{  }}>
          <Steps />
          <div className='bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row buttonShadow h-200' style={{ maxWidth: '80vw' }}>
            <div className='md:w-1/2 md:pr-8'>
              <img src={singleProduct.ImageURL} alt='Product' className='w-full h-auto rounded-md' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-3xl font-semibold mb-4'>{singleProduct.Title}</h2>
              <p className='text-gray-600 mb-4'>{singleProduct.Description}</p>
              <div className='flex flex-col items-start justify-between mb-4'>
                
                
              </div>
              <div className='flex flex-col items-start justify-between '>
                <span className='text-gray-700 flex items-center mt-1'>
                  {/*<Review />: {singleEntry.review}*/} 
                </span>
                <span className='text-gray-700 mt-1 font-semibold'>Publisher: {/*{singleProduct.publisher}*/} </span>
                <span className='text-gray-700 mt-1 font-semibold'>Published At: {singleProduct.Published_At} </span>
                <span className='text-2xl font-bold'>${singleProduct.Price}</span>
                <button className='btn btn-primary mt-4 buttonShadow'>Add to Cart</button>
                <div className='flex flex-wrap gap-2 p-2 justify-start'>
                 {/*<Tag text={singleEntry.tags[0]} color='blue' /> */}
                   {/*<Tag text={singleEntry.tags[1]  color='blue' />}*/ }
                   {/*<Tag text={singleEntry.tags[2]  color='blue' />}*/ }
                </div>
              </div>
            </div>
          </div>
         
         {/* <CommentSection singleProduct={singleProduct} />*/}
          <h2 className="text-2xl font-semibold">Share on: </h2> 
          <Share />
          
          
        </div>
      ) : (
        <div className='text-red-500'>Sorry.</div>
      )}
      <h2 className='text-2xl font-semibold mb-4 ml-4 mt-4'>You might also like...</h2>
      {/*<CardSection allEntries={allEntries} />*/}
      <Footer />
    </>
  );
};

export default ProductPage;
