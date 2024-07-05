import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";



const useData = (endpoint, customConfig = {}, queryKey,staleTime = 300_000) => {
    const fetchData = ()=> apiClient.get(endpoint,customConfig).then(res => res.data);

    return useQuery({
            queryKey: queryKey,
            queryFn : fetchData,
            staleTime: staleTime,

        })
   
};

export default useData;
