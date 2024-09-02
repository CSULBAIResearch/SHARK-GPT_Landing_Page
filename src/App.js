import React from "react";
import {
  LandingPage, 
  VideoPage, 
  MemberPage, 
  GalleryPage, 
  MentorPage} 
  from "./container";

import { Navbar, Footer } from "./component";
import "./App.css"

const App = () =>(
  <div>
    
    <Navbar/>
    <LandingPage/>
    <GalleryPage/>
    <VideoPage/>
    <MemberPage/>
    <MentorPage/>
    <Footer/>

    {/* <LandingPage/>
    <VideoPage/>

    <Footer/> */}

  </div>
)

export default App;