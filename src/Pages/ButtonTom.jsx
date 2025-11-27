import { useState } from "react";
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ButtonTom(){
    const [open, setopen] = useState(false);
    const [tool, setTool] = useState("");
    const [prim, setPrim] = useState("");
    const [seco, setSeco] = useState("");
    const [initlvl, setInitLvl] = useState("");
    const [tolvl, setToLvl] = useState("");
    const [stat, setStat] = useState("");
    const [curStat, setCurStat] = useState("");
    const [output, setOutput] = useState("");

    const handleToolChange = (event) => {
      setTool(event.target.value);
    };
    const handlePrimChange = (event) => {
      setPrim(event.target.value);
    };
    const handleSecChange = (event) => {
      setSeco(event.target.value);
    };
    const handleInitLvlChange = (event) => {
      setInitLvl(event.target.value);
    };
    const handleToLvlChange = (event) => {
      setToLvl(event.target.value);
    };
    const handleIntStatChange = (event) => {
      setStat(event.target.value);
    };

    const handleSubmit = async (e) => {
        try {
            const res = await fetch("(insert API key here)", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    tool,
                    prim,
                    seco,
                    initlvl: Number(initlvl),
                    tolvl: Number(tolvl),
                    stat,
                    curStat: Number(curStat)
                }),
            });
            
            const data = await res.json();
            setOutput(data.result);
        } catch (e) {
            setOutput ("Error: " + e.message);
        }
    }
    return (
        <Container maxWidth="sm">
      <Box sx={{ mt: 6 }} component={Paper} elevation={3} p={3}>
        <Typography variant="h6" gutterBottom>Wizard101 proportional stat cap scaler, but now on a webpage!</Typography>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tool</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tool}
            label="Tool"
            sx={{ alignItems: 'left',justifyContent: 'left' }}
            onChange={handleToolChange}
          >
            <MenuItem value={"main"}>Basic Scaler</MenuItem>
            <MenuItem value={"rev"}>Reverse</MenuItem>
            <MenuItem value={"offschool"}>offschool</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ m: 2 }} />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Primary School</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={prim}
            label="Primary Stat"
            sx={{ alignItems: 'left',justifyContent: 'left' }}
            onChange={handlePrimChange}
          >
            <MenuItem value={"Storm"}>Storm</MenuItem>
            <MenuItem value={"Fire"}>Fire</MenuItem>
            <MenuItem value={"Ice"}>Ice</MenuItem>
            <MenuItem value={"Myth"}>Myth</MenuItem>
            <MenuItem value={"Life"}>Life</MenuItem>
            <MenuItem value={"Death"}>Death</MenuItem>
            <MenuItem value={"Balance"}>Balance</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ m: 2 }} />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Secondary School</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={seco}
            label="Secondary school"
            sx={{ alignItems: 'left',justifyContent: 'left' }}
            onChange={handleSecChange}
          >
            <MenuItem value={"Storm"}>Storm</MenuItem>
            <MenuItem value={"Fire"}>Fire</MenuItem>
            <MenuItem value={"Ice"}>Ice</MenuItem>
            <MenuItem value={"Myth"}>Myth</MenuItem>
            <MenuItem value={"Life"}>Life</MenuItem>
            <MenuItem value={"Death"}>Death</MenuItem>
            <MenuItem value={"Balance"}>Balance</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ m: 2 }} />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Current Level</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={initlvl}
            label="Current Level"
            sx={{ alignItems: 'left',justifyContent: 'left' }}
            onChange={handleInitLvlChange}
          >
            <MenuItem value={10}>Level 10</MenuItem>
            <MenuItem value={20}>Level 20</MenuItem>
            <MenuItem value={30}>Level 30</MenuItem>
            <MenuItem value={40}>Level 40</MenuItem>
            <MenuItem value={50}>Level 50</MenuItem>
            <MenuItem value={60}>Level 60</MenuItem>
            <MenuItem value={70}>Level 70</MenuItem>
            <MenuItem value={80}>Level 80</MenuItem>
            <MenuItem value={90}>Level 90</MenuItem>
            <MenuItem value={100}>Level 100</MenuItem>
            <MenuItem value={110}>Level 110</MenuItem>
            <MenuItem value={120}>Level 120</MenuItem>
            <MenuItem value={130}>Level 130</MenuItem>
            <MenuItem value={140}>Level 140</MenuItem>
            <MenuItem value={150}>Level 150</MenuItem>
            <MenuItem value={160}>Level 160</MenuItem>
            <MenuItem value={170}>Level 170</MenuItem>
            <MenuItem value={180}>Level 180</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ m: 2 }} />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Interested Level</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tolvl}
            label="Interested level"
            sx={{ alignItems: 'left',justifyContent: 'left' }}
            onChange={handleToLvlChange}
          >
            <MenuItem value={10}>Level 10</MenuItem>
            <MenuItem value={20}>Level 20</MenuItem>
            <MenuItem value={30}>Level 30</MenuItem>
            <MenuItem value={40}>Level 40</MenuItem>
            <MenuItem value={50}>Level 50</MenuItem>
            <MenuItem value={60}>Level 60</MenuItem>
            <MenuItem value={70}>Level 70</MenuItem>
            <MenuItem value={80}>Level 80</MenuItem>
            <MenuItem value={90}>Level 90</MenuItem>
            <MenuItem value={100}>Level 100</MenuItem>
            <MenuItem value={110}>Level 110</MenuItem>
            <MenuItem value={120}>Level 120</MenuItem>
            <MenuItem value={130}>Level 130</MenuItem>
            <MenuItem value={140}>Level 140</MenuItem>
            <MenuItem value={150}>Level 150</MenuItem>
            <MenuItem value={160}>Level 160</MenuItem>
            <MenuItem value={170}>Level 170</MenuItem>
            <MenuItem value={180}>Level 180</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ m: 2 }} />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Interested Stat</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stat}
            label="Interested Stat"
            sx={{ alignItems: 'left',justifyContent: 'left' }}
            onChange={handleIntStatChange}
          >
            <MenuItem value={"hp"}>Health</MenuItem>
            <MenuItem value={"damage"}>Damage</MenuItem>
            <MenuItem value={"pierce"}>Pierce</MenuItem>
            <MenuItem value={"resist"}>Resistance</MenuItem>
            <MenuItem value={"acc"}>Accuracy</MenuItem>
            <MenuItem value={"outgoing"}>Outgoing Healing</MenuItem>
            <MenuItem value={"pip"}>Power Pip Chance</MenuItem>
          </Select>
        </FormControl>
        
        <Box sx={{ m: 2 }} />

        <TextField label="Value of Stat" fullWidth sx={{ mb: 2 }}
          value={curStat} onChange={(e) => setCurStat(e.target.value)} />

        <Button variant="contained" onClick={handleSubmit}>Submit</Button>

        <Typography variant="body1" sx={{ mt: 2 }}>
          {output ? `Output: ${output}` : "The Scaled value will appear here."}
        </Typography>
      </Box>
    </Container>
    );
}