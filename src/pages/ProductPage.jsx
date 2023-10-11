/* components */
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import Footer from '../components/Footer';
import Card from '../components/Card';
/* functions */
import { getEntry } from '../contentful';
import {useState, useEffect} from 'react';

export default function ProductPage() {

const [entry, setEntry] = useState({});

useEffect(() => {
  getEntry('65vTk3JnOFw7P3onawUAHg')
    .then((entryData) => {setEntry(entryData)})
    .catch((error) => console.error('Error fetching data',error))
}, []);

/* useEffect(()=>{console.log('entry')},[entry]); */

  return (
    <>
      <NavbarLoggedIn />
        {!(Object.keys(entry).length===0) && <Card   key={entry.sys.id}   blurb={entry.fields.blurb} image={entry.fields.image} title={entry.fields.title} id='1645XVOgL8cGdByh6e17Qh' /> }
      <Footer /> 
    </>
  );
}
