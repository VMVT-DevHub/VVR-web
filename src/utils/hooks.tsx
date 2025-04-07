import { useQuery } from "@tanstack/react-query";
import api from "./api";
import { LocationResponse } from "../types";


export const useLocation = (countryCode:string, page:number) => {
    const { data, isLoading, refetch } = useQuery<LocationResponse>({
    queryKey: ['location', { countryCode, page }],
    queryFn: () => api.getLocations(countryCode, page),
    enabled: !!countryCode,
    retry: false,
    refetchOnWindowFocus: false,
    });
    
    return { data, isLoading, refetch };
};