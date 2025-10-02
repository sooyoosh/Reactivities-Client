//import React from 'react'

import { Grid2} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../Details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

//

type Props={
    activities:IActivity[],
    selectActivity:(id:string)=>void,
    cancelselectActivity:()=>void,
    selectedActivity:IActivity|undefined,
    editMode:boolean,
    handleCloseForm:()=>void,
    handleOpenForm:(id:string)=>void,
    //handleSubmitForm:(activity:IActivity)=>void,
    handledelete:(id:string)=>void
}

export default function ActivityDashboard({activities,selectActivity,
    cancelselectActivity,selectedActivity,editMode,handleCloseForm,
    handleOpenForm,handledelete}:Props) {
    return (
        <Grid2 container spacing={4}>
            <Grid2 size={7}>
                    <ActivityList activity={activities}
                        selectActivity={selectActivity}
                        handleCloseForm={handleCloseForm}
                        handledelete={handledelete}       
                    />
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity&& !editMode &&<ActivityDetail
                 selectactivity={selectedActivity}
                 cancelselectActivity={cancelselectActivity}
                 handleOpenForm={handleOpenForm}
                 />}
                 {editMode&&<ActivityForm 
                 handleCloseForm={handleCloseForm}
                 selectedActivity={selectedActivity}
                 //handleSubmitForm={handleSubmitForm}
                 />}
            </Grid2>
        </Grid2>
    )
}
