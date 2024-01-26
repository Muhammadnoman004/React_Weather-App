import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {

  let [weather, setweather] = useState("");
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
    if (cityName) {
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
        .catch((error) => {
          console.log("city not Found")
          Swal.fire({
            imageUrl: "https://png.pngtree.com/png-vector/20220616/ourmid/pngtree-sad-apologizing-emoticon-holding-a-sign-with-the-text-sorry-png-image_5103588.png",
            imageWidth: 120,
            imageHeight: 110,
            text: "City not found!",
          });
        })
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter City Name!",
      });
    }
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
    getDataFromApi(inpValue)
    setinpValue("")
  }

  return (
    <div className="App">

      <div className="main">
        <div className='childDiv'>
          <input placeholder='Enter City Name' type="text" className="inp" value={inpValue} onChange={(e) => setinpValue(e.target.value)} name="" id="" />
          <button onClick={SearchWeather} id='searchbtn'>Search</button>
        </div>
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
