import CommentBox from "./components/CommentBox/CommentBox";
import SideVideo from "./components/SideVideo/SideVideo";
// import summarisedVideos from "./assets/Data/videos.json";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import axios from "axios";
import {APIKey, APIBaseUrl } from "./utils";


const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <div className="videos-container">
            <div className="videos-container__one"></div>
            <hr className="videos-container__divider" />
            <div className="videos-container__two">
              <Routes>
                <Route path="/" element={<HomePage />}></Route>

                {/* videoId is equal to ${video.id} on line 32 in the SideVideo Component */}
                <Route path="video/:videoId" element={<HomePage />}></Route>
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
