import {  useState } from 'react'
import './App.css'
import { Box, Container, CssBaseline, Typography} from '@mui/material';
//import axios from 'axios';
import Navbar from './Navbar';
import ActivityDashboard from '../features/activities/Dashboard/ActivityDashboard';
//import { useQuery } from '@tanstack/react-query';
import { useActivities } from '../lib/hooks/useActivities';

function App() {

  //const [activities,setActivities]=useState<IActivity[]>([]);
  const [selectedActivity,setSelectedActivity]=useState<IActivity|undefined>(undefined);
  const [editMode,seteditMode]=useState<boolean>(false);
  const {activities,isPending,deleteActivity}=useActivities();

  // useEffect(()=>{
  //   axios.get<IActivity[]>("https://localhost:7777/api/Activities")
  //   .then( res=>setActivities(res.data))
  //   .catch(err=>console.log(err))
  //   return(()=>{})
  // },[])

  // const {data:activities,isPending} = useQuery({
  //   queryKey: ['activities'], 
  //   queryFn:async () => {
  //    const res= await axios.get<IActivity[]>("https://localhost:7777/api/Activities");
  //     return res.data
  //   }
  // });


const handleSelectActivity=(id:string)=>{
  setSelectedActivity(activities?.find(x=>x.id===id));
}

const handleCancelActivity=()=>{
  setSelectedActivity(undefined);
}

const handleOpenForm=(id?:string)=>{
  if(id) handleSelectActivity(id);
  else handleCancelActivity();
  seteditMode(true);
}


const handleCloseForm=()=>{
  seteditMode(false);
   
}

// const handleSubmitForm=(activity:IActivity)=>{


//   seteditMode(false);
// }


  const handledelete=async(id:string)=>{
    await deleteActivity.mutateAsync(id);
    
  }





  return (
    <Box sx={{bgcolor:'#eeeeee'}}>
      <CssBaseline/>
      <Navbar openForm={handleOpenForm}/>
      {/* <Typography variant="h1">React</Typography> */}
      <Container sx={{mt:3}}>
        {!activities || isPending ? (
          <Typography>...is Loading</Typography>
        ) :(

      <ActivityDashboard
      handleOpenForm={handleOpenForm}
      handleCloseForm={handleCloseForm} 
      editMode={editMode}
      activities={activities}
      selectActivity={handleSelectActivity}
      cancelselectActivity={handleCancelActivity}
      selectedActivity={selectedActivity}
      //handleSubmitForm={handleSubmitForm}
      handledelete={handledelete}
      />  
        )}
      </Container>    
    </Box>
  )
}

export default App
