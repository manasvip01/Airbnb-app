//import logo from './logo.svg';
import "../App.css";
import Airbnb from "../images/Airbnb.png"

export default function Navbar() {
  return (
          <nav>
              <img src={Airbnb} alt="Not found" width="90px" className="airbnb"></img>
          </nav>
  );
}

//export default App;