import file from '../assets/memesData'
import React from 'react'

function Meme () {
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

  const handleChange = (event) => {
    setMeme(prev => ({
      ...prev, 
      [event.target.name]: event.target.value
    }))
  } 

  return (
    <main>
      <div className='form'>
          <input type='text' placeholder='top text' className='input' name='topText' value={meme.topText} onChange={handleChange}/>
          <input type='text' placeholder='bottom text' className='input' name='bottomText' value={meme.bottomText} onChange={handleChange}/>
          <button 
            className='button'
            onClick={getRandomMeme}
            >Get a new meme image</button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className='memeImage'/>
        <h2 className='text top'>{meme.topText}</h2>
        <h2 className='text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme