import { useState, useEffect } from 'react';
import './App.css';

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

  /*function handleFetch(){
    fetchData();
  }*/ //MANUAL ON CLICK FETCH <button onClick={handleFetch}>Fetch</button>

  return (
    <div className='appContainer'>
      <div className={checkBackgorund(data?.weather[0]?.main)} id='genericApp'>
          <div className='localContainer'>
            <h3>Name: {data?.name}</h3>
            <h3>Latitude: {data?.coord?.lat}</h3>
            <h3>Longitude: {data?.coord?.lon}</h3>
          </div>
          <div className='mainContainer'>
            <h3>feels_like: {data?.main?.feels_like}</h3>
            <h3>humidity: {data?.main?.humidity}</h3>
          </div>
          <div className='tempContainer'>
            <h3>temperature maximum:{data?.main?.temp_max}</h3>
            <h3>temperature: (temp) {data?.main?.temp}</h3>
            <h3>temperature minimum:{data?.main?.temp_min}</h3>
          </div>
          <div className='weatherContainer'>
            <h3>{data?.weather[0]?.description}</h3>
            <h3>{data?.weather[0]?.icon}</h3>
            <h3>{data?.weather[0]?.id}</h3>
            <h3>{data?.weather[0]?.main}</h3>
          </div>
      </div>
    </div>
  );
}

export default App;
