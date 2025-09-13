//import React from 'react'

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import type { FormEvent } from "react";

type prop={
  handleCloseForm:()=>void,
  selectedActivity?:IActivity
}


export default function ActivityForm({handleCloseForm,selectedActivity}:prop) {

  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData= new FormData(e.currentTarget)
   const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value,key)=>{
      data[key]=value
    })
    console.log(data)
  }



  return (
    <Paper sx={{borderRadius:3,padding:3}}>
        <Typography variant="h4">Create Activity</Typography>
    <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={2}>
        <TextField name="Title" label="Title" variant="filled" defaultValue={selectedActivity?.title}/>
        <TextField name="Description" label="Description" variant="filled" defaultValue={selectedActivity?.description}/>
        <TextField name="Category" label="Category" variant="filled" defaultValue={selectedActivity?.category}/>
        <TextField name="date"  type="date" defaultValue={selectedActivity?.date? dayjs(selectedActivity.date).format("YYYY-MM-DD"):""}/>
        <TextField name="City" label="City" variant="filled" defaultValue={selectedActivity?.city}/>
        <TextField name="Venue" label="Venue" variant="filled" defaultValue={selectedActivity?.venue}/>
        <Box display='flex' justifyContent='end' gap={3}>
          <Button color="inherit" onClick={handleCloseForm}>Cancel</Button>
          <Button color="success" type="submit" variant="contained">Submit</Button>
        </Box>
    </Box>
    </Paper>
  )
}
