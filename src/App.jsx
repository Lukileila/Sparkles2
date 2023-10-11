import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Entry from './pages/Entry.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Error from './pages/Error.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Layout from './components/Layout.jsx';
import HomeLoggedIn from './pages/HomeLoggedIn.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='user/:name' element={<HomeLoggedIn/>}/>
          <Route path="entry" element={<Entry />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path='singleproduct/:id' element={<ProductPage/>} />
          <Route path="*" element={<Error />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
