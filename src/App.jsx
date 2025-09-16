import './App.css'
import periwinkleLogo from './assets/periwinklelogo.png'
import VoraciousVoid from './Pages/VoraciousVoid.jsx'
import Button from '@mui/material/Button'
import Ghastly from './Pages/GhastlyConspiracy.jsx'
import CryingSky from './Pages/CryingSky.jsx'
import CabalsRevenge from './Pages/CabalsRevenge.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ButtonTom from './Pages/ButtonTom.jsx';

function Home() {
  return (
    <>
      <p>
        Welcome to the website for the Periwinkle Squad guild! 
        This will be continuously updated with changes to graphical design, new content,
        and updates, so stay tuned!
      </p>
    </>
  )
}

function App() {
  const [openRaid, setOpenRaid] = React.useState(false);
  const [openTool, setOpenTool] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);

  const toggleRaidDrawer = (newOpen) => () => {
    setOpenRaid(newOpen);
  };

  const toggleToolDrawer = (newOpen) => () => {
    setOpenTool(newOpen);
  };

  const toggleInfoDrawer = (newOpen) => () => {
    setOpenInfo(newOpen);
  };

  const raidList = (
    <Box sx={{ width: 250 }} role="navigation" onClick={toggleRaidDrawer(false)}>
      <p>PSquad Raid Guides</p>
      <List>
        {[{text: 'Voracious Void', route: '/VoraciousVoid'},
        {text: 'Crying Sky', route: '/CryingSky'},
        {text: 'Cabals Revenge', route: '/CabalsRevenge'},
        {text: 'Ghastly Conspiracy', route: '/GhastlyConspiracy'}].map(({text, route}, index, arr) => (
          <React.Fragment key={route}>
          <ListItem disablePadding>
            <ListItemButton component={Link} to={route}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          {index < arr.length - 1 && <Divider sx={{backgroundColor: '#ffffffff', borderBottomWidth: 2, my: 1}} /> }
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const toolList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleToolDrawer(false)}>
      <p>PSquad Wizard101 Tools</p>
      <List>
        {[{text: 'Button Tom Bot', route: '/ButtonTom'}].map(({text, route}, index, arr) => (
          <React.Fragment key={route}>
          <ListItem disablePadding>
            <ListItemButton component={Link} to={route}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          {index < arr.length - 1 && <Divider sx={{backgroundColor: '#ffffffff', borderBottomWidth: 2, my: 1}} /> }
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const infoList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleInfoDrawer(false)}>
      <List>

      </List>
    </Box>
  );


  return (
    <>
      <Router>
        <nav className='top-nav'>
          <Button component={Link} to="/" variant="outlined">Home</Button>        
          <Button onClick={toggleRaidDrawer(true)} variant='outlined'>Raid Guides</Button>
            <Drawer open={openRaid}onClose={toggleRaidDrawer(false)} slotProps=
            {{ paper: {sx: {backgroundColor: '#000000ff', color: '#ccccff', width: 250, padding: 2, boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',}} }}>
              {raidList}
            </Drawer>
          <Button onClick={toggleToolDrawer(true)} variant='outlined'>Helpful Tools</Button>
            <Drawer open={openTool}onClose={toggleToolDrawer(false)} slotProps=
            {{ paper: {sx: {backgroundColor: '#000000ff', color: '#ccccff', width: 250, padding: 2, boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',}} }}>
              {toolList}
            </Drawer>
          <Button onClick={toggleInfoDrawer(true)} variant='outlined'>Information</Button>
            <Drawer open={openInfo}onClose={toggleInfoDrawer(false)} slotProps=
            {{ paper: {sx: {backgroundColor: '#000000ff', color: '#ccccff', width: 250, padding: 2, boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',}} }}>
              {raidList}
            </Drawer>
          <img src={periwinkleLogo} className="plogo" />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/VoraciousVoid" element={<VoraciousVoid />} />
          <Route path="/CryingSky" element={<CryingSky />} />
          <Route path="/CabalsRevenge" element={<CabalsRevenge />} />
          <Route path="/GhastlyConspiracy" element={<Ghastly />} />
          <Route path="/ButtonTom" element={<ButtonTom />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
