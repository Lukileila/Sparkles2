import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Entry from './pages/Entry.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Error from './pages/Error.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="entry" element={<Entry />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
