//import React from 'react'

import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";

type Prop={
    activity:IActivity,
    selectActivity:(id:string)=>void,
    handleCloseForm:()=>void
}


export default function ActivityCard({activity,selectActivity,handleCloseForm}:Prop) {



  return (
    <Card sx={{borderRadius:'10px'}}>
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography variant="h5">{activity.date}</Typography>
            <Typography variant="h5">{activity.description}</Typography>
            <Typography variant="h5">{activity.city}/{activity.venue}</Typography>
        </CardContent>
        <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
            <Chip label={activity.category} variant="outlined"/>
            <Button onClick={() => { selectActivity(activity.id);handleCloseForm()}}  size="medium" variant="contained">View</Button>
        </CardActions>
    </Card>
  )
}
