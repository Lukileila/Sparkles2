import { useState, /* useEffect  */} from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Steps from '../components/Steps';
import Review from '../components/Review';
import CommentSection from '../components/CommentSection';
import Share from '../components/Share';
import CardSection from '../components/CardSection';
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import Footer from '../components/Footer';
/* import { getEntry } from '../contentful'; */
import Spinner from '../components/Spinner';
import Tag from '../components/Tag';


export default function ProductPage({allEntries}) {
  const { id } = useParams();
  const [singleEntry, setSingleEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log('all Entries',allEntries)

/*   useEffect(() => {
      getEntry(id)
        .then((entryData) => {
          setSingleEntry(entryData);
          console.log('entry data',entryData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    
  }, [id]); */

console.log("ProductPage rendered with id:", id);
console.log("Single Entry:", singleEntry);

  return (
    <>
      <NavbarLoggedIn />
      <div className='top-50'>
        <Breadcrumbs singleEntry={singleEntry} />
      </div>

      {isLoading ? (
        <div className='h-screen flex justify-center items-center'>
          <Spinner />
        </div>
      ) : singleEntry ? (
        <div className='bg-gray-100 flex flex-col items-center justify-center gap-10' style={{  }}>
          <Steps />
          <div className='bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row buttonShadow h-200' style={{ maxWidth: '80vw' }}>
            <div className='md:w-1/2 md:pr-8'>
              <img src={singleEntry.image.fields.file.url} alt='Product' className='w-full h-auto rounded-md' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-3xl font-semibold mb-4'>{singleEntry.title}</h2>
              <p className='text-gray-600 mb-4'>{singleEntry.description}</p>
              <div className='flex flex-col items-start justify-between mb-4'>
                
                
              </div>
              <div className='flex flex-col items-start justify-between '>
                <span className='text-gray-700 flex items-center mt-1'>
                  <Review />: {singleEntry.review}
                </span>
                <span className='text-gray-700 mt-1 font-semibold'>Publisher: {singleEntry.publisher} </span>
                <span className='text-gray-700 mt-1 font-semibold'>Published At: {singleEntry.publishedAt} </span>
                <span className='text-2xl font-bold'>${singleEntry.price}</span>
                <button className='btn btn-primary mt-4 buttonShadow'>Add to Cart</button>
                <div className='flex flex-wrap gap-2 p-2 justify-start'>
                  <Tag /*text={singleEntry.tags[0]}*/ color='blue' />
                  <Tag /*text={singleEntry.tags[1]} */color='blue' />
                  <Tag /*text={singleEntry.tags[2]}*/ color='blue' />
                </div>
              </div>
            </div>
          </div>
         
          <CommentSection singleEntry={singleEntry} />
          <h2 className="text-2xl font-semibold">Share on: </h2> 
          <Share />
          
          
        </div>
      ) : (
        <div className='text-red-500'>Sorry.</div>
      )}
      <h2 className='text-2xl font-semibold mb-4 ml-4 mt-4'>You might also like...</h2>
      <CardSection allEntries={allEntries} />
      <Footer />
    </>
  );
}
