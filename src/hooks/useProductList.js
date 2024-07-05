import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";

const useProductList = (query) =>{

    const getProducts = ({pageParams = 1}) => apiClient.get("/products", {params : {...query, page : pageParams}}).then(res => res.data)

    return useInfiniteQuery({
        queryKey: ["products", query],
        queryFn: getProducts,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : null 
        }
    })

}

export default useProductList;