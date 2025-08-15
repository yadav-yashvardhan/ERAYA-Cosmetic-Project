import React from 'react';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import About from './pages/about/about';
import Contact from './pages/contacts/contacts';
import Home from './pages/home/home';
import Signin from './components/loginPopups/login';
import Lip from './pages/lip/lip';
import Hair from './pages/hair/hair';
import Skin from './pages/skin/skin';

function App() {
  return (
    <>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/contact-us" element={<Contact />} />
       <Route path="/signin" element={<Signin />} />
       <Route path="/lip" element={<Lip />} />
       <Route path="/skin" element={<Skin />} />
       <Route path="/hair" element={<Hair />} />

       
      </Routes>
       </div>
      <Footer />
   </>
  );
}

export default App;


// function App() {
//   return <h1 style={{ color: "white" }}>Hello World</h1>;
// }

// export default App;

