import logo from "./logo.svg";
import React, { useEffect, useRef } from "react";
import "./App.css";
import Navabar from "./components/Navbar";
import image from "./heart.png";
import { gsap, Power3 } from "gsap";
import { Link } from "react-router-dom";
import earth from "./earth.mp4";
import map from "./map.jpg";
import wheel from "./qbc.jpg";

function App() {
  let t1 = new gsap.timeline();
  let t2 = new gsap.timeline();
  let ease = Power3.easeOut();

  let heart = useRef(null);
  let text = useRef(null);
  let buttons = useRef(null);

  useEffect(() => {
    t1.to(heart, 1, {
      x: 500,
    });

    t2.to([text, buttons], 1, {
      x: -450,
    });
  });

  return (
    <div className="App">
      <div className="page1">
        <Navabar />
        <div className="landing">
          <img src={image} className="heart" ref={(el) => (heart = el)} />
          <div className="text" ref={(el) => (text = el)}>
            What are you <br />
            looking for?
          </div>
          <div className="buttons" ref={(el) => (buttons = el)}>
            <a className="button-6">
              <Link className="link" to="./registerDonor">
                Donate
              </Link>
            </a>
            <a className="button-6">
              <Link className="link" to="./registerPatient">
                Recieve
              </Link>
            </a>
          </div>
          <div className="fDiv">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM11 8H9V10H11V12H13V10H15V8H13V6H11V8ZM14 20H16V14H8V20H10V16H14V20Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="page2">
        <video src={earth} className="vid" autoPlay loop muted />
        <div className="text" id="pg2Txt">
          An effort to make world a place
          <br /> where noboby dies of organ shortage.
        </div>
      </div>
      <div className="page3">
        <img src={map} className="map" />
        <div id="pg3" className="text">
          Help people find <br />
          the nearest hospitals <br />
          and donors
        </div>
        <button className="button-6" id="learn">
          Learn more
        </button>
      </div>
      <div className="page4">
        <img src={wheel} className="map" id="wheel" />
        <div id="pg4" className="text">
          Making people's lives better <br /> and expanding our reach.
        </div>
        <button className="button-6" id="rec">
          Get Record
        </button>
      </div>
    </div>
  );
}

export default App;
