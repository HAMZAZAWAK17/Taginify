//AppDownload.jsx

import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
      For better experience download <br /> Taginify App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="/second" />
        <img src={assets.app_store} alt="/first" />
      </div>
    </div>
  );
};

export default AppDownload;
