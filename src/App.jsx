import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Error from './pages/Error.jsx';
import ProductPage from './pages/ProductPage.jsx';
import HomeLoggedIn from './pages/HomeLoggedIn.jsx';
import {useState} from 'react';

function App() {
const [userName, setUserName]= useState("Harun");


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home userName={userName}/>} />
        <Route path='/' element={<Home userName={userName} />}/>
        <Route path='user/:name' element={<HomeLoggedIn userName={userName}/>}/>
        <Route path="login" element={<Login userName={userName} />} />
        <Route path="signup" element={<SignUp userName={userName} />} />
        <Route path='singleproduct/:id' element={<ProductPage userName={userName}/>} />
        <Route path="*" element={<Error userName={userName} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


