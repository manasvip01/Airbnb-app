import "../App.css";
import Star from "../images/Star2.png"

export default function Card(props) {
    let badgeText
    if(props.openSpots==0){
        badgeText="SOLD OUT"
    }
    else if(props.location=="ONLINE"){
        badgeText="ONLINE"
    }
    else{
        badgeText=""
    }
  return (
          <div className="cards">
            {badgeText && <div className="Soldout">{badgeText}</div>} 
          <div className="photo">
              <img src={props.coverImg} alt="Not found" width="280px" className="photo1"></img>
              </div>
              <div className="star1">
              <img src={Star} alt="no" className="Star" width="20px" />
              <p className="review">{props.review}</p>
              <p className="country">{props.country}</p>
              </div>
              <div className="title1">
                <p className="title">{props.title}</p>
              </div>
          </div>
  );
}

//export default App;