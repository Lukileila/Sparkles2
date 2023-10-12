import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children, userName}){    
    return (
    <>
        <Navbar userName={userName}/>
        {children}
        <Footer />
    </>
    )
}
