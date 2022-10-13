function Meme () {
  return (
    <main>
      <form className='form'>
          <input type='text' placeholder='top text' className='input'/>
          <input type='text' placeholder='bottom text' className='input'/>
          <button className='button'>Get a new meme image</button>
      </form>
    </main>
  )
}

export default Meme