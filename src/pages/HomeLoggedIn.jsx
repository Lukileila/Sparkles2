import HeroBanner from '../components/HeroBanner';
import Search from '../components/Search';
import CardSection from '../components/CardSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function HomeLoggedIn(){    
    return (
    <>
    <Navbar/>
    <HeroBanner/>
    <Search/>
    <h2 className="text-2xl font-semibold mb-4 ml-12">Shop</h2>
    <CardSection/>
    <Footer/>
    </>
    )
}
