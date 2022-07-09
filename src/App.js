import { useState, useEffect } from 'react';
import './App.css';
import './styles/weatherApp.css'

function App() {

  const [data, setData] = useState(null);
  const [convertToCelsius, setConvertToCelsius] = useState(true);

  const fetchData = () => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?lat=-23.944841&lon=-46.330376&appid=96b64657ba611c0c2fd06cfb8cb1a8ec')
    .then((response) => response.json())
    .then((actualData) => setData(actualData))
    .then(console.log(data))
  }

  useEffect(() => { //ACIDENTALLY LOOPS
    fetchData();
  }, []);

  function checkBackgorund(type){ //OBJECT LITERAL
    const currentMainWeather = { //FOLLOWING MAIN AND ID PROVIDED IN data.weather[0]
      "Thunderstorm" : "thunderApp",
      "Drizzle" : "drizzleApp",
      "Rain" : "rainApp",
      "Mist" : "mistApp",
      "Clouds" : "cloudsApp",
      "Clear" : "clearApp",
      "Squall" : "thunderApp",
      "Tornado" : "thunderApp",
      "Ash" : "thunderApp",
      "Sand" : "sandApp",
      "Fog" : "fogApp",
      "Haze" : "fogApp",
      "Smoke" : "fogApp",
      default: "defaultApp"
    }
    return currentMainWeather[type] || currentMainWeather.default
  }

  let celsiusConverter = (Ktemp) => { return (Ktemp - 273.15).toFixed(2) + "° C" }
  let farenheitConverter = (Ktemp) => { return ((Ktemp - 273.15)* (9/5) + 32).toFixed(2) + "° F" }

  function conversionHandler(p, e){

    function askConversion(e){
      if(e){
        return celsiusConverter(e)
      } else {
        return farenheitConverter(e)
      }
    }
  
    function askFalseConversion(e){
      if(e){
        return farenheitConverter(e)
      } else {
        return celsiusConverter(e)
      }
    }
  
    if(p){
      if(convertToCelsius){
        return askConversion(e)
      } else {
        return askFalseConversion(e)
      }
    } else {
      if(!convertToCelsius){
        return askConversion(e)
      } else {
        return askFalseConversion(e)
      }
    }
  }


  function handleConversion(e){
    e.preventDefault();
    e.stopPropagation();
    if(convertToCelsius){
      setConvertToCelsius(false);
    } else {
      setConvertToCelsius(true);
    }
  }

  let getCurrentTime = () => {
    let date = new Date();
    let minutes = date.getMinutes();
    minutes = minutes <= 9 ? '0' + minutes : minutes;
    let hours = date.getHours();
    hours = hours <= 9 ? '0' + hours : hours;
    let time = hours + " : " + minutes;
    return time;
  }

  return (
    <div className='appContainer'>
      <div className={checkBackgorund(data?.weather[0]?.main)} id='genericApp'>
        <div className='dateTime'>
          <h2>{new Date().toLocaleDateString()}</h2>
          <h2>{getCurrentTime()}</h2>
        </div>
          <div className='localContainer'>
            <h3><b>{data?.name}</b></h3>
            <h3><sup>{data?.weather[0]?.description.charAt(0).toUpperCase() + data?.weather[0]?.description.slice(1)}</sup></h3>
            <h3><span>latitude:</span>{data?.coord?.lat}</h3>
            <h3><span>longitude:</span>{data?.coord?.lon}</h3>
          </div>
          <div className='mainContainer'>
            <h3><span>sensação térmica</span>{celsiusConverter(data?.main?.feels_like)}</h3>
            <h3><span>humidade</span>{data?.main?.humidity + "%"}</h3>
            <h3><span>ventos</span>{(data?.wind?.speed*3.6).toFixed(1) + " km/h"}</h3>
          </div>
          <div className='tempContainer'>
            <h3><span>temperatura maxima</span>{conversionHandler(true, data?.main?.temp_max)}<u onClick={(e) => handleConversion(e)}>  ({conversionHandler(false, data?.main?.temp_max)})</u></h3>
            <h3><span>temperatura atual</span>{conversionHandler(true, data?.main?.temp)}<u onClick={(e) => handleConversion(e)}>  ({conversionHandler(false, data?.main?.temp)})</u></h3>
            <h3><span>temperatura minima</span>{conversionHandler(true, data?.main?.temp_min)}<u onClick={(e) => handleConversion(e)}>  ({conversionHandler(false, data?.main?.temp_min)})</u></h3>
          </div>
      </div>
    </div>
  );
}

export default App;
