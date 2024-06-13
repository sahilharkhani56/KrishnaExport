import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import { Topbar } from "./components/Navbar/Topbar";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Gallery from "./components/Pages/Gallery";
import Inquiry from "./components/Pages/Inquiry";
import Product from "./components/Pages/Product";
import SubProduct from "./components/Pages/SubProduct";
import { SingleProduct } from "./components/Pages/SingleProduct";
import { Box } from "@mui/material";
const App = () => {
 return (<>
   <Router>
    {/* <Topbar/> */}
    <Box className="content-container">
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/gallery" element={<Gallery/>} />
         <Route path="/inquire" element={<Inquiry />} />
         <Route path="/product" element={<Product />} />
         <Route path="/product/:subproduct" element={<SubProduct />} />
         <Route path="/product/:subproduct/:productnumber" element={<SingleProduct/>}/>
         {/* <Route path="/" element={<Home />} />
         <Route path="/" element={<Home />} /> */}
         {/* <Route path="/news" element={<News />} /> */}
         {/* Define other routes that you need*/}
       </Routes>
     </main>
     </Box>
     <Box className="footer">
     <Footer/>
     </Box>
   </Router>
   </>
 );
};

export default App;