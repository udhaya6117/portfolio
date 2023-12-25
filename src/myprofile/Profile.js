import React from "react";
import "./Profile.css";
import { Container } from "@mui/material";
import Lottie from "lottie-react";
import animationdata from "./../animations/Animation - 1703388702458.json";
import animationcircle from "./../IMGS/Yellow Modern Coming Soon Instagram Post (2).png";
import me from "./../IMGS/potofiolo-removebg-preview.png";
import EastIcon from '@mui/icons-material/East';
import { ReactComponent as Waveimg } from "../IMGS/latest.svg";

const Profile = () => {
    
  return (
    <div className="mainpage">
      <div className="overlay">
        <div className="header">
          <Container>
            <div className="headernavigations">
              <div className="logo-fonts">
                logo<span>.</span>
              </div>
              <div className="navigter">
                <text>
                  Home<span>.</span>
                </text>
                <text>
                  About<span>.</span>
                </text>
                <text>
                  Work<span>.</span>
                </text>
                <text>
                  Contact<span>.</span>
                </text>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="hero-context">
            <div className="content-self">
              <div className="INTRO"><text>HELLO, I'M A</text>
              <h1>WEB <span>DEVELOPER.</span></h1>
              <p>HI I'm Udhaya Prakash, a passionate UI Web Developer bassed in the india. welcome to portfolio world.</p>
              <button className="btn-intro">About Me</button></div>
              <div className="location">
                <div className="box-location">
                    <text>India</text>
                    <text>Tamil Nadu , Chennai</text>
                </div>
              </div>
            </div>
            <div className="img-right">
              <img src={animationcircle} />
              <div className="secound-img">
                <img src={me} />
              </div>
                <text className="text-blob-1">UI</text>
                <text className="text-blob-2">WEB <br/> DEVELOPER</text>
            </div>
          </div>
        </Container>
      </div>
      <div id="about" className="">

      </div>
    </div>
  );
};

export default Profile;
