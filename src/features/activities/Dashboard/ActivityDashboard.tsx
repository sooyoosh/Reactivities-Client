//import React from 'react'

import { Grid2} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../Details/ActivityDetail";

//

type Props={
    activities:IActivity[],
    selectActivity:(id:string)=>void,
    cancelselectActivity:()=>void,
    selectedActivity:IActivity|undefined
}

export default function ActivityDashboard({activities,selectActivity,cancelselectActivity,selectedActivity}:Props) {
    return (
        <Grid2 container spacing={4}>
            <Grid2 size={7}>
                    <ActivityList activity={activities}
                        selectActivity={selectActivity}
                    />
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity&& <ActivityDetail
                 activity={selectedActivity}
                 cancelselectActivity={cancelselectActivity}
                 />}
            </Grid2>
        </Grid2>
    )
}
