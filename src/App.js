import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {

  const [weather, setWeather] = useState({});  

  useEffect(() => {
    getWeather();

    async function getWeather() {
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=f80fbdd43d2f442f2381e64fa182995c");
      const result = await response.json();
      setWeather(result);
      console.log(result);
    }
  }, []);


  const getTodaysDate = (d) => {
    const months = [ 
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November', 
      'December' 
      ];  
 
    const days = [ 
      'Monday', 
      'Tuesday',
      'Wednesday', 
      'Thursday', 
      'Friday', 
      'Saturday', 
      'Sunday' 
    ]  
 
    var day = days[d.getDay()]; 
    var date = d.getDate(); 
    var month = months[d.getMonth()]; 
    var year = d.getFullYear(); 
    return `${day} ${date} ${month} ${year}` 
  }

  return (
    <div className="main">
      <main>
          <div>
            <div className="weather-container">
              <div className="weather">
                <div className="temp">{weather.main.temp}</div>)
                <div className="image"><img src={'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'}/></div>
                <div className="condition">{weather.weather[0].main}</div>
                <div className="city">{weather.name}, {weather.sys.country}</div>
              <br></br>
              <div className="date">{getTodaysDate(new Date())}</div>
              <br></br>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
} 

export default App;