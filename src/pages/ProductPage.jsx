/*import { useState, useEffect } from 'react';*/
/*import { useParams } from 'react-router-dom';*/
import {useState, useEffect} from 'react';
/* import Breadcrumbs from '../components/Breadcrumbs';
import Steps from '../components/Steps';
import Review from '../components/Review';
import CommentSection from '../components/CommentSection';
import Share from '../components/Share';
import CardSection from '../components/CardSection'; */
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import Footer from '../components/Footer';
/* import {  getEntries,  getEntry } from '../contentful'; */
/* import {createClient, getEntry} from  '../../contentful'; */
/* import * as contentful from 'contentful'; */
/* import Spinner from '../components/Spinner';
import Tag from '../components/Tag';
 */
import { getEntry } from '../contentful';


import CardSection from '../components/CardSection';
import Card from '../components/Card';

/* 
                export default function Home(){   
                  const [allEntries,setAllEntries] = useState([]);

                  useEffect(() => {
                      getEntries()
                        .then((entriesData) => setAllEntries(entriesData))
                        .catch((error) => console.error(error));
                    }, []);

                  return (
                  <>
                  <Navbar/>
                  <HeroBanner/>
                  <Search/>
                  <h2 className="text-2xl font-semibold mb-4 ml-12">Shop</h2>
                  <CardSection allEntries={allEntries}/>
                  <Footer/>
                  </>
                  )
  */

export default function ProductPage() {

/*   const client = contentful.createClient({
    space: "lerti9id4rxk",
    accessToken: "wxR7_bR8_nE62t7-zKSB9fTUNEKFfQmGiiiWNZXJJco"
  }) */

  const [entry, setEntry] = useState({})
/*   const [destructuredEntry, setDestructuredEntry] = useState({}) */

/* 
                    const [allEntries,setAllEntries] = useState([]);

                    useEffect(() => {
                        getEntries()
                          .then((entriesData) => setAllEntries(entriesData))
                          .catch((error) => console.error(error));
                      }, []); */

useEffect(() => {
  getEntry('1645XVOgL8cGdByh6e17Qh')
    .then((entryData) => {setEntry(entryData);
      console.log("Entry is:",entry)

    console.log("Entry.fields is:",entry.fields)
    console.log("title:",entry.fields.title)
    
    })
    .catch((error) => console.error(error));
}, []);

/*  
useEffect(() => {
  const { fields, sys } =entry;
  setDestructuredEntry( {...fields} {...sys} );
  console.log('destructuredEntry',   destructuredEntry);   
}, [entry]); */ 

/*
  const what = async() => {
    try {
     const x = await client.getEntry('1645XVOgL8cGdByh6e17Qh')
     console.log(x)
     setEntry(x)
    return "entry Return";
  } catch (error) {
    console.error(error.message);
  }
};

 what();
 */

/*   const key={sys.id} {...fields} {...sys} 
 const {fields}=entry(); */
  /*const { id } = useParams();
  const [singleEntry, setSingleEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);*/
  
/* 
  useEffect(() => {
    if (id) {
      getEntries(id)
        .then((entryData) => {
          setSingleEntry(entryData);
          console.log('entry data function',entryData);
          console.log('singleEntry State',singleEntry);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [id]); */

/*   useEffect(() => {
    getEntry(id)
      .then((entryData) => {
        console.log(entryData);
        setSingleEntry(entryData);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error);
         setIsLoading(false);
      });
  }, [id]); */
  
/* console.log('getEntry',getEntry); */


/*
console.log("ProductPage rendered with id:", id);
console.log("Single Entry:", singleEntry);*/

  return (
    <>
      <NavbarLoggedIn />
      <p>testing</p>
      {console.log("unconditional")}
      {console.log(entry)}
      {console.log("entry.length ",entry.length)}
      {0==false&& <p>falsytest</p>}
      {0==false&&console.log("falsytest")}
      {entry.length ? console.log("truthyXXX"):console.log("falsyXXX")}
      {!entry.length && <p>falsy</p>}
      {!entry.length && console.log("falsy with length XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")}
      {!entry && console.log("falsy without length XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")}
      {console.log("entry.length after test:",entry.length)}

      {entry&& <p>truthy</p> }
      {entry&&console.log("truthy")}
      {entry&& <p>testing2</p>}

      {!entry.length&& <p>entry.length evalueates to false</p>  }
      {!entry.length && <Card   key={entry.sys.id}   blurb={entry.fields.blurb} image={entry.fields.image} title={entry.fields.title} id='1645XVOgL8cGdByh6e17Qh' /> }  
   {/*      <CardSection allEntries={fakeAllEntries} />*/}
{/*       <div className='top-50'>
        <Breadcrumbs singleEntry={singleEntry} />
      </div>

      {isLoading ? (
        <div className='h-screen flex justify-center items-center'>
          <Spinner />
        </div>
      ) : singleEntry && singleEntry.fields && singleEntry.sys ? (
        <div className='bg-gray-100 h-screen flex flex-col items-center justify-center gap-10' style={{ height: '120vh' }}>
          <Steps />
          <div className='bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row' style={{ maxWidth: '80vw' }}>
            <div className='md:w-1/2 md:pr-8'>
              <img src={singleEntry.fields.image.fields.file.url} alt='Product' className='w-full h-auto rounded-md' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-3xl font-semibold mb-4'>{singleEntry.fields.title}</h2>
              <p className='text-gray-600 mb-4'>{singleEntry.fields.description}</p>
              <div className='flex flex-col items-start justify-between mb-4'>
                <span className='text-2xl font-semibold'>${singleEntry.fields.price}</span>
                <button className='btn btn-primary mt-4'>Add to Cart</button>
              </div>
              <div className='flex flex-col items-start justify-between '>
                <span className='text-gray-700 flex items-center mt-1'>
                  <Review />: {singleEntry.fields.review}
                </span>
                <span className='text-gray-700 mt-1'>Publisher: {singleEntry.fields.publisher} </span>
                <span className='text-gray-700 mt-1'>Published At: {singleEntry.fields.publishedAt} </span>
                <div className='flex flex-wrap gap-2 p-2 justify-start'>
                  <Tag text={singleEntry.fields.tags[0]} color='blue' />
                  <Tag text={singleEntry.fields.tags[1]} color='blue' />
                  <Tag text={singleEntry.fields.tags[2]} color='blue' />
                </div>
              </div>
            </div>
          </div>
          <Share />
          <CommentSection singleEntry={singleEntry} />
          <h2 className='text-2xl font-semibold mb-4 ml-4'>You might also like...</h2>
          <CardSection />
        </div>
      ) : (
        <div className='text-red-500'>Sorry.</div>
      )}
      */}
      <Footer /> 
    </>
  );
}
