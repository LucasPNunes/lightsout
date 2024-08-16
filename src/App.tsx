import { createContext, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import Banner from './banner';
import CardArea from './cards';
import Switch from "react-switch";
import Footer from './footer';

type ThemeContext = {
  theme: string;
  toggleTheme: () => void;
}


function App() {
  const  [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light')
  }
  return (
    <div className='page' id={theme}>
        <div className='navBar'>
            <img src={reactLogo} alt='Vite logo' />
                <h3><button className='links'>Home</button></h3>
                <h3><button className='links'>Sobre</button></h3>
                <h3><button className='links'>Contato</button></h3>
            <button style={{width:"200px"}}>
            Login
            </button>
            <Switch onChange={toggleTheme} checked={theme === "light"} />
        </div>
        <Banner/>
        <div className='titulo'>
          <h1 style={{marginTop:"50px"}}>Fernando de Noronha</h1>
          <h2 >Venha conhecer a joia do Brasil!</h2>
        </div>
        <CardArea/>
        <Footer/>
      </div>
  )
}

export default App
