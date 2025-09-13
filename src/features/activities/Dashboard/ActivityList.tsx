//import React from 'react'

import { Box } from "@mui/material"
import ActivityCard from "../ActivityCard"

type Prop={
    activity:IActivity[],
    selectActivity:(id:string)=>void
}
export default function ActivityList({activity,selectActivity}:Prop) {


  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
        {activity.map(act=>(
            <ActivityCard key={act.id} activity={act} selectActivity={selectActivity}/>
        ))}
    </Box>
  )
}
