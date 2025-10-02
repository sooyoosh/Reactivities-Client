//import React from 'react'

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type prop={
  handleCloseForm:()=>void,
  selectedActivity?:IActivity,
  //handleSubmitForm:(activity:IActivity)=>void
}


export default function ActivityForm({handleCloseForm,selectedActivity,
  //handleSubmitForm
}:prop) {

  const {updateActvity,createActivity}=useActivities();



  const handleSubmit=async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData= new FormData(e.currentTarget)
   const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value,key)=>{
      data[key]=value
    })

    
    const activity=data as unknown as IActivity;
    if(selectedActivity){
      data.id=selectedActivity.id;
      await updateActvity.mutateAsync(activity);
      handleCloseForm();
    } else{
      await createActivity.mutateAsync(activity);
      handleCloseForm();
      
    }


    //handleSubmitForm(data as unknown as IActivity)


  }



  return (
    <Paper sx={{borderRadius:3,padding:3}}>
        <Typography variant="h4">Create Activity</Typography>
    <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={2}>
        <TextField name="title" label="Title" variant="filled" defaultValue={selectedActivity?.title}/>
        <TextField name="description" label="Description" variant="filled" defaultValue={selectedActivity?.description}/>
        <TextField name="category" label="Category" variant="filled" defaultValue={selectedActivity?.category}/>
        <TextField name="date"  type="date" defaultValue={selectedActivity?.date? dayjs(selectedActivity.date).format("YYYY-MM-DD"):
          dayjs().format("YYYY-MM-DD")
        }/>
        <TextField name="city" label="City" variant="filled" defaultValue={selectedActivity?.city}/>
        <TextField name="venue" label="Venue" variant="filled" defaultValue={selectedActivity?.venue}/>
        <Box display='flex' justifyContent='end' gap={3}>
          <Button color="inherit" onClick={handleCloseForm}>Cancel</Button>
          <Button color="success" type="submit"
           variant="contained" disabled={updateActvity.isPending||createActivity.isPending}>Submit</Button>
        </Box>
    </Box>
    </Paper>
  )
}
