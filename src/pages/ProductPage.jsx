import Breadcrumbs from '../components/Breadcrumbs';
import Steps from '../components/Steps';
import Review from '../components/Review';
import CommentSection from '../components/CommentSection';
import Share from '../components/Share';
import CardSection from '../components/CardSection';
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import Footer from '../components/Footer';
import { getEntries } from '../contentful';
import {useState, useEffect} from 'react';
import Spinner from '../components/Spinner';
import Tag from '../components/Tag';

export default function ProductPage () {

  const [allEntries,setAllEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
    
  useEffect(() => {
    getEntries()
      .then((entriesData) => {console.log(entriesData);
        setAllEntries(entriesData);
        setIsLoading(false)})
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
  }, []);

    return (
<>
<NavbarLoggedIn/>
<div className='top-50'>
<Breadcrumbs allEntries={allEntries} />
</div>

{isLoading ? (
        <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
      ) : (

<div className="bg-gray-100 h-screen flex flex-col items-center justify-center gap-10" style={{height:'120vh'}}>
<Steps />

{allEntries.map(({ fields, sys}) => (
<div  key={sys.id} {...fields} {...sys}  > <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row" style={{maxWidth:'80vw'}}>
        <div className="md:w-1/2 md:pr-8">
          <img
            src={fields.image.fields.file.url}
            alt="Product"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">{fields.title}</h2>
          <p className="text-gray-600 mb-4">
           {fields.description}
          </p>
          <div className="flex flex-col items-start justify-between mb-4">
            <span className="text-2xl font-semibold">${fields.price}</span>
            <button className="btn btn-primary mt-4">Add to Cart</button>
          </div>
          <div className="flex flex-col items-start justify-between ">
          <span className="text-gray-700 flex items-center mt-1">
                <Review/>: {fields.review}</span>
            <span className="text-gray-700 mt-1">Publisher:{fields.publisher} </span>
            <span className="text-gray-700 mt-1">Publisher:{fields.publishedAt} </span>
            <div className="flex flex-wrap gap-2 p-2 justify-start">
      <Tag text={fields.tags[0]} color='blue' />
      <Tag text={fields.tags[1]}  color='blue' />
      <Tag text={fields.tags[2]}  color='blue' />
    </div>
            
          </div>
        </div>
      </div>  
      </div>
      ))}
    </div>  )} 
    <Share />
    <CommentSection allEntries={allEntries}/>
    <h2 className="text-2xl font-semibold mb-4 ml-4">You might also like...</h2>
    <CardSection allEntries={allEntries}/>
    <Footer/>
</>

    )
}