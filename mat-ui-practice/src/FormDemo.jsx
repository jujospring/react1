import { Slider, TextField, Box } from "@mui/material"
import { useState } from "react"


export default function FormDemo() {
  const [name, setName] = useState("");
  const [hooties, setHooties] = useState(50);
  const updateName = (evt) => {
    setName(evt.target.value);
  };
  const updateHooties = (evt, newVal) => {
    setHooties(newVal);
  }
  return (
      <Box
        sx={{
          width: 300,
          height: 250,
          borderRadius: 1,
          bgcolor: '#b2d8d8',
          '&:hover': {
            bgcolor: '#66b2b2',
          },
        }}
      >
          <h2>Name: {name}</h2>
          <TextField 
            sx= {{color: '#43e8d8' }}
            id="outlined-basic" 
            placeholder="gerby"
            label="Cat name"
            variant="outlined"
            value={name}
            onChange={updateName}
          />
          <h2>Hooties: {hooties}</h2>
          <Slider 
            sx={{ width: 200, color: '#43e8d8' }}
            aria-label="Hooties" 
            value={hooties} 
            onChange={updateHooties}
          />
        </Box>
  )
}