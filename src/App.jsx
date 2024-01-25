import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [weather, setweather] = useState([]);
  let [inpValue, setinpValue] = useState("");
  let [Temp, setTemp] = useState("");
  let [Speed, setspeed] = useState("");
  let [deg, setdeg] = useState("");
  let [Humidity, setHumidity] = useState("");
  let [cityName, setCityName] = useState("");


  useEffect(function () {
    getDataFromApi('karachi')
  }, [])

  const getDataFromApi = (cityName) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=23452a215e99c24e452175b6ff4e8081`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.main)
        setTemp(Math.round(data.main.temp))
        setHumidity(data.main.humidity)
        setCityName(data.name)
        setweather(data.weather[0].main)
        setspeed(data.wind.speed)
        setdeg(data.wind.deg)
      })
  }
  if (!cityName) {
    return <h1>loading...</h1>
  }
  console.log(Temp);
  console.log(Humidity);
  console.log(cityName);
  console.log(weather);
  console.log(Speed);
  console.log(deg);

  const SearchWeather = () => {
    console.log(inpValue);
    getDataFromApi(inpValue)
  }

  return (
    <div className="App">

      <div className="main">
        <input type="text" onChange={(e) => setinpValue(e.target.value)} name="" id="" />
        <button onClick={SearchWeather}>Search</button>
        <h1>{cityName}</h1>
        <h2>Temperature : {Temp} °C</h2>
        <h2>Humidity : {Humidity}</h2>
        <h2>Weather : {weather}</h2>
        <h2>Speed : {Speed}</h2>
        <h2>Deg : {deg}</h2>
      </div>
    </div>
  );
}

export default App;
