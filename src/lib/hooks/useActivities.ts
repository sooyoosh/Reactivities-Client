import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//import axios from "axios";
import agent from "../api/agent";



export const useActivities=()=>{
    const queryClient = useQueryClient();
    const {data:activities,isPending} = useQuery({
    queryKey: ['activities'], 
    queryFn:async () => {
     const res= await agent.get<IActivity[]>("/Activities");
      return res.data
    }
  });

  const updateActvity=useMutation({
    mutationFn:async (activity:IActivity)=>{
        await agent.put("/Activities",activity)
    },
    onSuccess:async ()=>{
         queryClient.invalidateQueries({ queryKey: ["activities"] });
    }

  })


  const createActivity=useMutation({
    mutationFn:async (activity:IActivity)=>{
      await agent.post("/Activities",activity)
    },
    onSuccess:async ()=>{
         queryClient.invalidateQueries({ queryKey: ["activities"] });
    }
  })

  const deleteActivity=useMutation({
    mutationFn:async (id:string)=>{
      await agent.delete(`/Activities/${id}`)
    },
    onSuccess:async ()=>{
         queryClient.invalidateQueries({ queryKey: ["activities"] });
    }
  })



  return{
    activities,
    isPending,
    updateActvity,
    createActivity,
    deleteActivity
  }
}