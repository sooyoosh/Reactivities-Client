import axios from "axios";




const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    //   timeout: 10000,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
});

const sleep=(delay:number)=>
    new Promise(resolve=>{
        setTimeout(resolve,delay)
    })


agent.interceptors.response.use(
    async res => {
        try {
            await sleep(500)
            return res;
        } catch (error) {
            console.log(error);            
            return Promise.reject({ message: "Network Error", original: error });   
        }
    });

    export default agent;