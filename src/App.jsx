import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import vector from "./assets/vector.svg";
import group from "./assets/Group 688.svg";
import vector1 from "./assets/arrow.svg";
import group682 from "./assets/Group 682.jpg";
import group683 from "./assets/Group 683.svg";
import group684 from "./assets/Group 684.svg";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillFileLock2Fill } from "react-icons/bs";

function App() {
  const [toggle, setToggle] = useState(true);
  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="main">
        <div className="firstpart">
          <h1 className="firsttext">Travelista Tours</h1>
          <p className="travel">
            Travel is the only purchase that enriches you in ways <br /> beyond
            material wealth
          </p>
        </div>
        <div className="secondpart">
          <img src={vector1} alt="" className="arrow" />
          <div className="img">
            <img src={vector} alt="" className="vector" />
            <img src={group} alt="" className="group" />
          </div>
          <div className="welcomebox">
            <div className="welcomet">
              <h1 className="wel">Welcome</h1>
              <p style={{ color: "rgba(0, 0, 0, 0.50)" }} className="login">
                Login <span className="withemail">with Email</span>
              </p>
            </div>
            <div className="input-container">
              <label htmlFor="">Email Id</label>
              <div className="emailinput">
                <input type="email" style={{ textAlign: "center" }} />{" "}
                <span className="icon">
                  <MdOutlineMailOutline> </MdOutlineMailOutline>
                </span>
              </div>
              <label htmlFor="">Password</label>
              <div className="emailinput">
                <input
                  type={toggle ? "password" : "text"}
                  id="password"
                  style={{ textAlign: "center" }}
                />
                <span className="icon">
                  <BsFillFileLock2Fill onClick={handletoggle}>
                    {toggle ? "hide" : "show"}
                  </BsFillFileLock2Fill>
                </span>
              </div>
            </div>
            <p className="forget">Forget Password?</p>
            <button className="btn">LOGIN</button>
            <p className="or">
              <span className="minus1">______</span> OR <span className="minus2">______</span>
            </p>
            <div className="images">
              <img src={group682} alt="" />
              <img src={group683} alt="" />
              <img src={group684} alt="" />
            </div>
            <p className="dont">Don’t have account?Register Now</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
