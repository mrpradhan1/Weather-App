import React,{useState} from "react";
import summer from "./photos/summer.jpg";
import winter from "./photos/winter.jpg";


const App =()=>{
    const [lat,setLat]=useState(0);
    const [long, setLong]=useState(0);
    const [hemisphere, setHemisphere]=useState("");
    const [month, setMonth]=useState(new Date().getMonth()+1);

    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((positions)=>{
                setLat(positions.coords.latitude);
                setLong(positions.coords.longitude);

                if(positions.coords.latitude>0)
                    setHemisphere("Northen Hemisphere");
                else if(positions.coords.latitude<0)
                    setHemisphere("Southen Hemisphere");
                else
                    setHemisphere("Equator");
            })
        }
    }
    return(
        <div>
            {/* <h1>Latitude: {lat}</h1>
            <h1>Longitude: {long}</h1>
            <h1>Hemisphere: {hemisphere}</h1>
            <h1>Month: {month}</h1> */}
            <button onClick={getLocation}>getLocation</button>
            {
           hemisphere!=="" && (
            (hemisphere==="Northen Hemisphere" && (month>=4 && month<=10))|| 
            (hemisphere==="Southern Hemisphere" && (month<4 || month>10)) )
           && (
            <div>
                <h1>It's Summer</h1>
                <img style={{width:"100vw", height:"700px"}} src={summer} alt="Summer Season" />        
            </div>
           )
      }

      {
           hemisphere!=="" && ((hemisphere==="Northen Hemisphere" && (month<4 || month>10))  ||(hemisphere==="Southern Hemisphere" && (month>=4 && month<=10)))

           && (
            <div>
                <h1>It's Winter</h1>
                <img style={{width:"100vw", height:"700px"}} src={winter} alt="Winter Season" />        
            </div>
           )
      }
        </div>
    )
}

export default App;