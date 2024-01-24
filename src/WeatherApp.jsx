import { useState } from "react";
import { fetchWeatherData } from "./helpers/fetchWeatherData"; 

export const WeatherApp = () => {
  const difKelvin = 273.15
  const API_KEY = '2b9dd790d9016d955b2122e4ff653739';
  const [dataClima, setDataClima] = useState(null);
  const [ciudad, setCiudad] = useState('');

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
    console.log(ciudad);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ciudad.length > 0) {
      try {
        const weatherData = await fetchWeatherData(ciudad, API_KEY);
        setDataClima(weatherData);
        console.log(weatherData);
      } catch (error) {
      }
    }
  };


  return (

    
    <div className="container">
      <h1>App de Clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ciudad}
          onChange={handleCambioCiudad}
        />
        <button type="submit" >
          Buscar
        </button>
      </form>
      {dataClima && (

        <div>
          <h2>{dataClima.name}</h2>
          <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)} °C</p>
          <p>Humedad {dataClima.main.humidity}%</p>
          <img className="card-img-center" src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} />
          <p>Min: {parseInt(dataClima?.main?.temp_min - difKelvin)} °C - Max: {parseInt(dataClima?.main?.temp_max - difKelvin)} °C </p>
        </div>
      )}
    </div>
  )
}
