import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState(null);

  const fetchData = () => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?lat=-23.944841&lon=-46.330376&appid=96b64657ba611c0c2fd06cfb8cb1a8ec')
    .then((response) => response.json())
    .then((actualData) => setData(actualData))
    .then(console.log(data))
  }

  /*useEffect(() => {
    fetchData();
  });*/

  function handleFetch(){
    fetchData();
  }

  function handleMap(){
    console.log("Latitude " + data.coord.lat)
  }

  return (
    <div className='App'>
      <button onClick={handleFetch}>Fetch</button>
      <button onClick={handleMap}>Map</button>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
