import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import backgroundImg from "./images/weather app image.avif";

export default function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeatherData = async () => {
    try {
      const apiKey = "2fe1288fc790300a54a5d77d4487e927";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("Could not fetch weather data. Please try again.");
      setWeather(null);
    }
  };
  return (
    <>
      <div className="App-container">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={getWeatherData}>Get Weather</button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {weather && (
          <div>
            <h2>Weather in {weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Description: {weather.weather[0].description}</p>
          </div>
        )}
        <p className="footer">olamiposi's weather app 2025</p>
      </div>
    </>
  );
}
