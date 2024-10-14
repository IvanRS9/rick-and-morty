import React, { useState } from 'react';
import './App.css';
import img from '/src/img/rick-morty.png';
import Characters from './components/Characters';

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const searchCharacters = async () => {
    const api = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
    const apiJson = await api.json();

    setCharacters(apiJson.results);
    setNextPage(apiJson.info?.next || null);
    setPrevPage(apiJson.info?.prev || null);
  };

  const fetchCharacters = async (url) => {
    const api = await fetch(url);
    const apiJson = await api.json();

    setCharacters(apiJson.results);
    setNextPage(apiJson.info?.next || null);
    setPrevPage(apiJson.info?.prev || null);
  };

  const loadCharacters = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const apiJson = await api.json();

    setCharacters(apiJson.results);
    setNextPage(apiJson.info?.next || null);
    setPrevPage(apiJson.info?.prev || null);
  };

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1 className='title'>Rick & Morty</h1>

          {characters ? (
            <>
              <div className="search search-container">
                <input
                  className='mx-2 width-50 height-30'
                  type="text"
                  placeholder="Buscar personaje..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={searchCharacters} className='btn-search'>Buscar</button>
              </div>

              <Characters characters={characters} setCharacters={setCharacters} />

              <div className='pagination pagination-container'>
                {prevPage && (
                  <button onClick={() => fetchCharacters(prevPage)} className='btn-search'>Anterior</button>
                )}
                {
                  prevPage && (
                    <button onClick={loadCharacters} className="btn-search">Primera página</button>
                  )
                }
                {nextPage && (
                  <button onClick={() => fetchCharacters(nextPage)} className='btn-search'>Siguiente</button>
                )}
              </div>
            </>
          ) : (
            <>
              <img src={img} alt="Rick and Morty" className='img-home' />
              <br />
              <button onClick={loadCharacters} className='btn-search'>Buscar Personajes</button>
            </>
          )}
        </header>
      </div>
    </>
  );
};

export default App;
