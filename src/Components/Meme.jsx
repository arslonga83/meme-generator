import file from '../assets/memesData'
import React from 'react'

function Meme () {

  // const [memeUrl, setMemeUrl] = React.useState('');
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: ''
  })

  const [allMemeImages, setAllMemeImages] = React.useState(file)

  const getRandomMeme = () => {
    const memesArray = allMemeImages.data.memes;
    let num = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[num].url);
    setMeme(prev => {
      return {
        ...prev,
        randomImage: memesArray[num].url
      }
    }
    )
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
      <img src={meme.randomImage} className='memeImage'/>
    </main>
  )
}

export default Meme