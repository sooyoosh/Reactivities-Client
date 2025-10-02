import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities"

//import React from 'react'
type Prop = {
    selectactivity: IActivity,
    cancelselectActivity:()=>void,
    handleOpenForm:(id:string)=>void
}
export default function ActivityDetail({ selectactivity,cancelselectActivity,handleOpenForm }: Prop) {

    const {activities}=useActivities();
    const activity=activities?.find(x=>x.id===selectactivity.id);

    if(!activity) return <Typography variant="h5">...there is no activity</Typography>

    return (
        <Card sx={{ borderRadius: '10px' }}>
            <CardMedia
                component="img"
                image={`/public/images/categoryImages/${activity.category}.jpg`}
                alt={activity.category}
            />
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="h5">{activity.date}</Typography>
                <Typography variant="h5">{activity.description}</Typography>
                <Typography variant="h5">{activity.city}/{activity.venue}</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" onClick={()=>handleOpenForm(activity.id)}>Edit</Button>
                <Button onClick={cancelselectActivity} color="inherit">Cancle</Button>
            </CardActions>
        </Card>
    )
}
