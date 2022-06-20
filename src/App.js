//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import Data from "./Data.js"

export default function App() {
  const hero=Data.map(item =>{
    
    return(
      <Card
      item={item}
      {...item}
       />
    )
  })
  return(
    <div>
      <Navbar />
      <Main />
      <div className="row">
      {hero}
      </div>
    </div>
  );
}

//export default App;
