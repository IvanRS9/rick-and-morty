import React from 'react'
import './App.css'
import img from '/src/img/rick-morty.png'
import Characters from './components/Characters'
import { useState } from 'react'

const App = () => {
  const [characters, setCharacters] = useState(null)

  const regApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const apiJson = await api.json()

    setCharacters(apiJson.results)
  }

  return <>
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>
          Rick & and Morty
        </h1>

        {
          characters ? (<Characters characters={characters} setCharacters={setCharacters} />)
            : (
              <>
                <img src={img} alt="Rick and Morty" className='img-home' />

                <br />
                <button onClick={regApi} className='btn-search'>Buscar Personajes</button>
              </>
            )
        }
      </header>
    </div>
  </>
}

export default App
