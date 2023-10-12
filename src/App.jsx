import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Error from './pages/Error.jsx';
import ProductPage from './pages/ProductPage.jsx';
import HomeLoggedIn from './pages/HomeLoggedIn.jsx'
import {getEntries} from './contentful.js'
import {useState, useEffect} from 'react'

function App() {
  const [userName, setUserName]= useState("Harun");
  const [allEntries,setAllEntries] = useState([]);
      
  useEffect(() => {
      getEntries()
        .then((entriesData) => setAllEntries(entriesData))
        .catch((error) => console.error(error));
    }, []);


  return (
    <BrowserRouter>
      <Routes>
          <Route index              element={<Home allEntries={allEntries} userName={userName} />} />
          <Route path="/"           element={<Home allEntries={allEntries} userName={userName} />} />
          <Route path='user/:name'  element={<HomeLoggedIn allEntries={allEntries} userName={userName} />}/>
          <Route path="login"       element={<Login  userName={userName}  setUserName={setUserName} />} />
          <Route path="signup"      element={<SignUp  userName={userName} setUserName={setUserName}  />} />
          <Route path='singleproduct/:id' element={<ProductPage allEntries={allEntries} userName={userName} />} />
          <Route path="*"           element={<Error userName={userName}  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


