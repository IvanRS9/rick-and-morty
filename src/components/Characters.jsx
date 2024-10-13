import React from 'react'

const Characters = ({ characters, setCharacters }) => {
    const reset = () => {
        setCharacters(null)
    }

    return <>
        <div>
            <h1>Characters</h1>
            <span className='back-home' onClick={reset}>Go to home</span>
            <div className="container-characters">
                {characters.map((character) => (
                    <div className='character-container' key={character.id}>
                        <div className=''>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <p>
                                {
                                    character.status === 'Alive' ? (
                                        <>
                                            <span className='alive' /> Alive
                                        </>
                                    ) : (
                                        <>
                                            <span className='dead' /> Dead
                                        </>
                                    )
                                }
                            </p>
                            <p>
                                <span className='text-grey'>Episodios:</span>
                                <span className='text-grey'>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className='text-grey'>Especie:</span>
                                <span className='text-grey'>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className='back-home' onClick={reset}>Go to home</span>
        </div>
    </>
}

export default Characters
