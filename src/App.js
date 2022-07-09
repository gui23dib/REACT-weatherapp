import { useState, useEffect } from 'react';
import './App.css';
import './styles/weatherApp.css'
import checkBackground from './services/checkBackground';
import TempContainer from './services/conversionHandler';

function App() {

  const [data, setData] = useState(null);

  const fetchData = () => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?lat=-23.944841&lon=-46.330376&appid=96b64657ba611c0c2fd06cfb8cb1a8ec')
    .then((response) => response.json())
    .then((actualData) => setData(actualData))
    .then(console.log(data))
  }

  useEffect(() => { //ACCIDENTALLY LOOPS
    fetchData();
  }, []);

  return (
    <div className='appContainer'>
      <div className={checkBackground(data?.weather[0]?.main)} id='genericApp'>
        <div className='dateTime'>
          {/*printTimeAndDate()*/}
        </div>
          <div className='localContainer'>
            <h3><img src="./favicon.png" height="30px" width="30px"/> <b>{data?.name}</b></h3>
            <h3><sup>{data?.weather[0]?.description.charAt(0).toUpperCase() + data?.weather[0]?.description.slice(1)}</sup></h3>
            <h3><span>latitude:</span>{data?.coord?.lat}</h3>
            <h3><span>longitude:</span>{data?.coord?.lon}</h3>
          </div>
          <div className='mainContainer'>
            <TempContainer text="sensação térmica" data={data?.main?.feels_like}/>
            <h3><span>humidade</span>{data?.main?.humidity + "%"}</h3>
            <h3><span>ventos</span>{(data?.wind?.speed*3.6).toFixed(1) + " km/h"}</h3>
          </div>
          <div className='tempContainer'>
            <TempContainer text="temperatura maxima" data={data?.main?.temp_max}/>
            <TempContainer text="temperatura atual" data={data?.main?.temp}/>
            <TempContainer text="temperatura minima" data={data?.main?.temp_min}/>
          </div>
      </div>
    </div>
  );
}

export default App;
