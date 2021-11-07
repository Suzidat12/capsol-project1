
import React from 'react'
import { useState } from 'react'
import './Custom.css'
import logo from '../img/logo.png'
import profile from '../img/profile.jpg'

function SideHustlePage() {
  // the state function is used here
  // inputText control the text component in the field
  //handleText is used to update with onChanage event
  const [inputText, setInputText] = useState(logo);
  const handleText = (event) => setInputText(event.target.value)
  return (
    <div>
      <div className="top-bar">
        <div className="bar-left">
          <div className="menu">
            <a href="#">About</a>
            <a href="#">Store</a>
          </div>
        </div>
        <div className="bar-right">
          <div className="menu">
            <a href="#">Gmail</a>
            <a href="#">Images</a>
          </div>
          <a href="#" className="app-toggle">
            <i className="fa fa-ellipsis-h"></i>
          </a>
          <a href="#" className="profile-trigger">
            <img src={profile} />
          </a>
        </div>
      </div>
      <div className="content">
        <div className="search-wrapper">
          <div className="search-logo">
          
            {inputText ? <p>{inputText}</p> : <img src={logo} alt="Side hustle" />} 

          </div>

          <div className="search-bar">
            <div className="search-icon">
              <i className="fa fa-search"></i>
            </div>
            <input type="text" placeholder="Serach Google" onChange={handleText} />
            <div className="search-icon right">
              <i className="fa fa-microphone"></i>
            </div>
          </div>
          <div className="search-buttons">
            <a href="#">Google Search</a>
            <a href="#">I'm Feeling Lucky</a>
          </div>


        </div>
      </div>
      <div className="bottom-bar">
        <div className="bar-left">
          <div class="menu">
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search Works</a>
          </div>
        </div>
        <div className="bar-right">
          <div className="menu">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
    </div>

  );
}
export default SideHustlePage
