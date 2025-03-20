import React, { useState, useRef, useEffect } from 'react';
import "./search.css";

function Search({ setLocationId }) {
    const inputRef = useRef(null);
    const [error, setError] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query.length > 0) {
            fetch(`https://rickandmortyapi.com/api/location/?name=${query}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.results) {
                        setSuggestions(data.results);
                        setError('');
                    } else {
                        setSuggestions([]);
                        setError('No se encontraron ubicaciones.');
                    }
                })
                .catch(() => {
                    setSuggestions([]);
                    setError('Error al obtener sugerencias.');
                });
        } else {
            setSuggestions([]);
        }
    }, [query]);

    const handleSuggestionClick = (id, name) => {
        setLocationId(id);
        setQuery(name);
        setSuggestions([]);
        setError('');
    };

    return (
        <div className='search'>
            <div className='search-container'>
                <input
                    className='search-input'
                    ref={inputRef}
                    placeholder="Busca una ubicación..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {suggestions.length > 0 && (
                    <ul className='suggestions'>
                        {suggestions.map((location) => (
                            <li
                                key={location.id}
                                className='suggestion-item'
                                onClick={() => handleSuggestionClick(location.id, location.name)}
                            >
                                {location.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Search;
