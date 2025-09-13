import { useState } from "react";
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function ButtonTom(){

    const [tool, setTool] = useState("");
    const [prim, setPrim] = useState("");
    const [seco, setSeco] = useState("");
    const [initlvl, setInitLvl] = useState("");
    const [tolvl, setToLvl] = useState("");
    const [stat, setStat] = useState("");
    const [curStat, setCurStat] = useState("");
    const [output, setOutput] = useState("");

    const handleSubmit = async (e) => {
        try {
            const res = await fetch("http://127.0.0.1:5000/process", {
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
        <Typography variant="h6" gutterBottom>Button Tom bot, but now on a webpage!</Typography>

        <TextField label="Tool chosen" fullWidth sx={{ mb: 2 }}
          value={tool} onChange={(e) => setTool(e.target.value)} />

        <TextField label="Primary School" fullWidth sx={{ mb: 2 }}
          value={prim} onChange={(e) => setPrim(e.target.value)} />

        <TextField label="Secondary School" fullWidth sx={{ mb: 2 }}
          value={seco} onChange={(e) => setSeco(e.target.value)} />

        <TextField label="Current Level" fullWidth sx={{ mb: 2 }}
          value={initlvl} onChange={(e) => setInitLvl(e.target.value)} />

        <TextField label="Interested Level" fullWidth sx={{ mb: 2 }}
          value={tolvl} onChange={(e) => setToLvl(e.target.value)} />

        <TextField label="Interested Stat" fullWidth sx={{ mb: 2 }}
          value={stat} onChange={(e) => setStat(e.target.value)} />
        
        <TextField label="Value of Stat" fullWidth sx={{ mb: 2 }}
          value={curStat} onChange={(e) => setCurStat(e.target.value)} />

        <Button variant="contained" onClick={handleSubmit}>Submit</Button>

        <Typography variant="body1" sx={{ mt: 2 }}>
          {output ? `Output: ${output}` : "Output will appear here"}
        </Typography>
      </Box>
    </Container>
    );
}