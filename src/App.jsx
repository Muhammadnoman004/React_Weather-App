import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [weather, setweather] = useState([]);
  let [inpValue, setinpValue] = useState("");


  useEffect(function () {
    getDataFromApi()
  }, [])

  const getDataFromApi = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=23452a215e99c24e452175b6ff4e8081&units=metric`)
      .then((res) => res.json())
      .then((data) => setweather(data.main))
  }
  console.log(weather);
  console.log(weather.temp);

  const SearchWeather = () => {
    console.log(inpValue);
    getDataFromApi(inpValue)
  }

  return (
    <div className="App">

      <div className="main">
        <input type="text" onChange={(e) => setinpValue(e.target.value)} name="" id="" />
        <button onClick={SearchWeather}>Search</button>
        <h2>Temperature {weather.temp}</h2>
        <h2>Humidity {weather.humidity}</h2>
      </div>
    </div>
  );
}

export default App;
