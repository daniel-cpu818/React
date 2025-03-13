import React, { useState, useEffect } from 'react'

function Weather({ weather, background, image }) {
  const [isFah, setIsFah] = useState(false)

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }, [background]);

  const temperature = isFah ? `${((weather.temp * 9 / 5) + 32).toFixed(2)} °F` : `${weather.temp.toFixed(2)} °C`;
  
  return (
    <div className="grid-container"
      style={{
        backgroundColor: `#FFFFFFB3`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 16,
      }}>
      <div className='item header'>
        <span className='title'>
          <h1>App del clima</h1>
        </span>
        <p>{weather.city}, {weather.country}</p>
      </div>

      <div className='item icon' style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        {console.log("esta es la url =" + image)}
      </div>

      <div className='item middle'>
        <h1>"{weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}"</h1>
        <ul>
          <li className="weather-info">
            Wind Speed: <span className="value">{weather.speed}m/s</span>
          </li>
          <li className="weather-info">
            Clouds: <span className="value">{weather.clouds}%</span>
          </li>
          <li className="weather-info">
            Pressure: <span className="value">{weather.pressure}hPa</span>
          </li>
        </ul>
      </div>

      <div className='item footer'>
        <h3>{temperature}</h3>
        <button
    onClick={() => setIsFah(!isFah)}
    style={{
      boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)', 
      padding: '10px 20px',
      borderRadius: '8px',
      backgroundColor: '#c8c8c8',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Change to °F {isFah ? 'Celsius' : 'Fahrenheit'}
  </button>
      </div>
    </div>
  )
}

export default Weather
