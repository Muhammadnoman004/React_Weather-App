import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [weather, setweather] = useState([]);


  useEffect(function () {
    getDataFromApi()
  }, [])

  const getDataFromApi = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=23452a215e99c24e452175b6ff4e8081&units=metric`)
      .then((res) => res.json())
      .then((data) => setweather(data.main))
  }

    console.log(weather.temp);

  return (
    <div className="App">

    </div>
  );
}

export default App;
