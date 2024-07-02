import apiClient from "../utils/api-client";

export function getSearchSuggestion(search){
   return apiClient.get(`/products/suggestions?search=${search}`);
}