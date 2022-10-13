import logo from '../assets/Troll Face.png'

function Header () {
  return (
    <header className='header'>
      <img src={logo} className='logo'/>
      <h1 className='title'>Meme Generator</h1>
      <h3 className='subtitle'>React Course - Project 3</h3>
    </header>
  )
}

export default Header