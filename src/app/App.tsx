import { useEffect, useState } from 'react'
import './App.css'
import { Box, Container, CssBaseline} from '@mui/material';
import axios from 'axios';
import Navbar from './Navbar';
import ActivityDashboard from '../features/activities/Dashboard/ActivityDashboard';

function App() {

  const [activities,setActivities]=useState<IActivity[]>([]);
  const [selectedActivity,setSelectedActivity]=useState<IActivity|undefined>(undefined);


  useEffect(()=>{
    axios.get<IActivity[]>("https://localhost:7777/api/Activities")
    .then( res=>setActivities(res.data))
    .catch(err=>console.log(err))
    return(()=>{})
  },[])


const handleSelectActivity=(id:string)=>{
  setSelectedActivity(activities.find(x=>x.id===id));
}

const handleCancelActivity=()=>{
  setSelectedActivity(undefined);
}


  return (
    <Box sx={{bgcolor:'#eeeeee'}}>
      <CssBaseline/>
      <Navbar/>
      {/* <Typography variant="h1">React</Typography> */}
      <Container sx={{mt:3}}>
      <ActivityDashboard 
      activities={activities}
      selectActivity={handleSelectActivity}
      cancelselectActivity={handleCancelActivity}
      selectedActivity={selectedActivity}
      />  
      </Container>    
    </Box>
  )
}

export default App
