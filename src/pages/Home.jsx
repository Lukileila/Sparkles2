import HeroBanner from '../components/HeroBanner';
import Search from '../components/Search';
import CardSection from '../components/CardSection';
/* import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; */
import { getEntries } from '../contentful';
import {useState, useEffect} from 'react';
import Layout from "../components/Layout";


export default function Home({userName}){   
    const [allEntries,setAllEntries] = useState([]);


    useEffect(() => {
        getEntries()
          .then((entriesData) => setAllEntries(entriesData))
          .catch((error) => console.error(error));
      }, []);

    return (
    <>
       <div className='overflow-x-hidden'></div>
      <Layout userName={userName}>
        <HeroBanner userName={userName}/>
        <Search/>
        <h2 className="text-2xl font-semibold mb-4 ml-12">Shop</h2>
        <CardSection allEntries={allEntries}/>
      </Layout>
      </div>
    </>
    )
}
