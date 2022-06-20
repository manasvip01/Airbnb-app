//import logo from './logo.svg';
import "../App.css";
import Photogrid from "../images/Photogrid.png"

export default function Main() {
  return (
          <section className="main">
              <img src={Photogrid} alt="Not found" width="700px" className="photogrid"></img>
              <div className="main">
              <h1 className="online">Online Experiences</h1>
              <div className="mainpara">
              <p>Join unique Interactive activities lead</p>
            <p>by one-of-a-kind hosts-all without leaving</p>
            <p>home.</p>
            </div>
            </div>
          </section>
  );
}

//export default App;