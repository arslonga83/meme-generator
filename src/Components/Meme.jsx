import file from '../assets/memesData';

function Meme () {

  const getRandomMeme = () => {
    const memesArray = file.data.memes;
    let num = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[num].url);
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
    </main>
  )
}

export default Meme