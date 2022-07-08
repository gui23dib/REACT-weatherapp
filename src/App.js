import { useState, useEffect } from 'react';
import './App.css';
import './styles/weatherApp.css'

function App() {

  const [data, setData] = useState(null);

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

  let convertToCelsius = false //AD HANDLE CONVERSION TO A BUTTOn

  return (
    <div className='appContainer'>
      <div className={checkBackgorund(data?.weather[0]?.main)} id='genericApp'>
          <div className='localContainer'>
            <h3><b>{data?.name}</b></h3>
            <h3><sup>{data?.weather[0]?.description.charAt(0).toUpperCase() + data?.weather[0]?.description.slice(1)}</sup></h3>
            <h3><span>latitude:</span>{data?.coord?.lat}</h3>
            <h3><span>longitude:</span>{data?.coord?.lon}</h3>
          </div>
          <div className='mainContainer'>
            <h3><span>sensação térmica</span>{celsiusConverter(data?.main?.feels_like)}</h3>
            <h3><span>humidade</span>{data?.main?.humidity + "%"}</h3>
            <h3><span>ventos</span>{data?.wind?.speed*3.6 + " km/h"}</h3>
          </div>
          <div className='tempContainer'>
            <h3><span>temperatura maxima</span>{convertToCelsius ? celsiusConverter(data?.main?.temp_max) : farenheitConverter(data?.main?.temp_max)}<u>  ({!convertToCelsius ? celsiusConverter(data?.main?.temp_max) : farenheitConverter(data?.main?.temp_max)})</u></h3>
            <h3><span>temperatura atual</span>{convertToCelsius ? celsiusConverter(data?.main?.temp) : farenheitConverter(data?.main?.temp)}<u>  ({!convertToCelsius ? celsiusConverter(data?.main?.temp_max) : farenheitConverter(data?.main?.temp_max)})</u></h3>
            <h3><span>temperatura minima</span>{convertToCelsius ? celsiusConverter(data?.main?.temp_min) : farenheitConverter(data?.main?.temp_min)}<u>  ({!convertToCelsius ? celsiusConverter(data?.main?.temp_max) : farenheitConverter(data?.main?.temp_max)})</u></h3>
          </div>
      </div>
    </div>
  );
}

export default App;
