import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
/* import Entry from './pages/Entry.jsx'; */
/* import Login from './pages/Login.jsx'; */
/* import SignUp from './pages/SignUp.jsx'; */
import Error from './pages/Error.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Layout from './components/Layout.jsx';
/* import HomeLoggedIn from './pages/HomeLoggedIn.jsx'; */
import {useState, useEffect} from 'react';
/* import {getEntries} from './contentful.js' */

function App() {

  const [allEntries,setAllEntries] = useState([]);

 
  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (response.ok) {
          const data = await response.json();
          setAllEntries(data);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        console.error(error);
      }
    }

    getAllProducts();
  }, []);
  
    
/*   useEffect(() => {
      getEntries()
        .then((entriesData) => setAllEntries(entriesData))
        .catch((error) => console.error(error));
    }, []);
 */

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home allEntries={allEntries}/>} /> 
{/*           <Route path='user/:name' element={<HomeLoggedIn allEntries={allEntries}/>}/> */}
{/*           <Route path="entry" element={<Entry />} /> */}
    {/*       <Route path="login" element={<Login />} /> */}
{/*           <Route path="signup" element={<SignUp />} /> */}
<Route path='singleproduct/:productId' element={<ProductPage />} />

          <Route path="*" element={<Error />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
