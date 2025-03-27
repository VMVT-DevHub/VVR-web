import { useQuery } from "@tanstack/react-query";
import api from "./api";
import { LocationResponse } from "../types";


export const useLocation = (countryCode:string) => {
    const { data, isLoading, refetch } = useQuery<LocationResponse>({
    queryKey: ['location', { countryCode }],
    queryFn: () => api.getLocations(countryCode),
    enabled: !!countryCode,
    retry: false,
    refetchOnWindowFocus: false,
    });
    
    return { data, isLoading, refetch };
};