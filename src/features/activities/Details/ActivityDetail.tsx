import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

//import React from 'react'
type Prop = {
    activity: IActivity,
    cancelselectActivity:()=>void,
    handleOpenForm:(id:string)=>void
}
export default function ActivityDetail({ activity,cancelselectActivity,handleOpenForm }: Prop) {

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
