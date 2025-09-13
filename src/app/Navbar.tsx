//import React from 'react'

import { Group } from "@mui/icons-material";
import { AppBar, Box, Button, MenuItem, Toolbar, Typography } from "@mui/material";

type props={
  openForm:()=>void
}


export default function Navbar({openForm}:props) {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{
        background: `linear-gradient(90deg, #0D47A1 0%, #86b4e2ff 100%)`,
        color: "#fff",
      }}>
        <Toolbar sx={{justifyContent:'space-between'}}>
          <Box>
            <div style={{display:'flex',gap:'10px'}}>
                <Group fontSize="large"/>
                <Typography variant="h4" fontWeight='bold'>
                    Reactivities
                </Typography>
            </div>
          </Box>
          <Box sx={{display:'flex'}}>
            <MenuItem sx={{fontWeight:'bold'}}>
                Activities
            </MenuItem>
            <MenuItem sx={{fontWeight:'bold'}}>
                Contact            </MenuItem>
            <MenuItem sx={{fontWeight:'bold'}}>
                Activities
            </MenuItem>
          </Box>
          <Button onClick={()=>openForm()} size="large" variant="contained" color="warning">Create Activity</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
