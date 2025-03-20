import React from 'react'
import "./locationInfo.css"

  function LocationInfo({ location }) {
    const length = location?.residents?.length || 0;
  
    return (
      <div className='location'>
        <div className='location_container'>
        <h1 className='location_name'>{location.name}</h1>
        <ul className='location_info'>
          <li className='location_item'>
            <span className='location_spam'>Type:</span> {location?.type || "Unknown"}
          </li>
          <li className='location_item'>
            <span className='location_spam'>Dimension:</span> {location?.dimension || "Unknown"}
          </li>
          <li className='location_item'>
            <span className='location_spam'>Population:</span> {length} {length === 1 ? "resident" : "residents"}
          </li>
        </ul>
        </div>
      </div>
    );
  }
  
export default LocationInfo