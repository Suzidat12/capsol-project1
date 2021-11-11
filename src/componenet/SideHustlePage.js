
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
            <button href="#">About</button>
            <button href="#">Store</button>
          </div>
        </div>
        <div className="bar-right">
          <div className="menu">
            <button href="#">Gmail</button>
            <button href="#">Images</button>
          </div>
          <button href="#" className="app-toggle">
            <i className="fa fa-ellipsis-h"></i>
          </button>
          <button href="#" className="profile-trigger">
            <img src={profile} />
          </button>
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
            <button href="#">Google Search</button>
            <button href="#">I'm Feeling Lucky</button>
          </div>


        </div>
      </div>
      <div className="bottom-bar">
        <div className="bar-left">
          <div class="menu">
            <button href="#">Advertising</button>
            <button href="#">Business</button>
            <button href="#">How Search Works</button>
          </div>
        </div>
        <div className="bar-right">
          <div className="menu">
            <button href="#">Privacy</button>
            <button href="#">Terms</button>
            <button href="#">Settings</button>
          </div>
        </div>
      </div>
    </div>

  );
}
export default SideHustlePage
