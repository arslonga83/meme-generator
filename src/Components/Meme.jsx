import file from '../assets/memesData'
import React from 'react'

function Meme () {

  const [memeUrl, setMemeUrl] = React.useState('');

  const getRandomMeme = () => {
    const memesArray = file.data.memes;
    let num = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[num].url);
    setMemeUrl(memesArray[num].url)
  }

  return (
    <main>
      <div className='form'>
          <input type='text' placeholder='top text' className='input'/>
          <input type='text' placeholder='bottom text' className='input'/>
          <button 
            className='button'
            onClick={getRandomMeme}
            >Get a new meme image</button>
      </div>
      <img src={memeUrl} className='memeImage'/>
    </main>
  )
}

export default Meme