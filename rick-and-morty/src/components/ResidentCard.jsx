import React, { useEffect } from 'react';
import useFetchApi from '../hocks/useFechApi';
import "./residentsCard.css"

function ResidentCard({ url }) {
    console.log(url);
    const { data: resident, request } = useFetchApi();

    useEffect(() => {
        request(url);
    }, [url]); 
    const episodes = resident?.episode?.length || 1;
    return (
        <div className='resident_card'>
            
            <div className='resident_heder'>
            <img className='resident_img' src={resident?.image} alt={resident?.name} />
            <span className='resident_status'>{resident?.status || "Unknown"}</span>
            </div>   
            <div className='resident_body'>              
            <h3 className='resident_name'>{resident?.name || "Unknown Resident"}</h3>
            <ul className='resident_info'>     
            <li className='resident_item'><span className='resident_spam'>Species: </span>{resident?.species || "Unknown"}</li>
            <li className='resident_item'><span className='resident_spam'>Origin: </span>{resident?.origin?.name || "Unknown"}</li>
            <li className='resident_item'><span className='resident_spam'>Eppisodes where appear: </span>{episodes}
            {episodes == 1 ? ' episode' : ' episode'}</li>
            </ul>   
            </div>
        </div>
    );
}

export default ResidentCard;
