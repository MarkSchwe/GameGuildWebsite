import { useState } from 'react'
import './App.css'
import periwinkleLogo from './assets/periwinklelogo.png'
import VoraciousVoid from './VoraciousVoid.jsx'
import Button from '@mui/material/Button'
import Ghastly from './GhastlyConspiracy.jsx'
import CryingSky from './CryingSky.jsx'
import CabalsRevenge from './CabalsRevenge.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Home() {
  return (
    <>
      <header>
      <h1>
        Hello Welcome to my page and uh, graphic design is my passion or somthing lol
      </h1>
      </header>
    </>
  )
}

function App() {
  return (
    <>
      <Router>
        <nav className='top-nav'>
          <Button component={Link} to="/" variant="outlined">Home</Button>
          <Button component={Link} to="/VoraciousVoid" variant="outlined">Voracious Void</Button>
          <Button component={Link} to="/CryingSky" variant='outlined'>Crying Sky</Button>
          <Button component={Link} to="/CabalsRevenge" variant="outlined">Cabal's Revenge</Button>
          <Button component={Link} to="/GhastlyConspiracy" variant="outlined">Ghastly Conspiracy</Button>        
          <img src={periwinkleLogo} className="plogo" />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/VoraciousVoid" element={<VoraciousVoid />} />
          <Route path="/CryingSky" element={<CryingSky />} />
          <Route path="/CabalsRevenge" element={<CabalsRevenge />} />
          <Route path="/GhastlyConspiracy" element={<Ghastly />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
