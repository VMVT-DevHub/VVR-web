import { useQuery } from "@tanstack/react-query";
import api from "./api";
import { LocationResponse, MedicineDetail } from "../types";


export const useLocations = (countryCode:string, page:number) => {
    const { data, isLoading, refetch } = useQuery<LocationResponse>({
    queryKey: ['location', { countryCode, page }],
    queryFn: () => api.getLocations(countryCode, page),
    enabled: !!countryCode,
    retry: false,
    refetchOnWindowFocus: false,
    });
    
    return { data, isLoading, refetch };
};

export const useMedicine = (id:string, language:string) => {
  const { data, isLoading, refetch } = useQuery<MedicineDetail>({
  queryKey: ['medicine', { id, language }],
  queryFn: () => api.getMedicine(id, language),
  enabled: !!id,
  retry: false,
  refetchOnWindowFocus: false,
  });
  
  return { data, isLoading, refetch };
};

export const useAllMedicines = (page:number) => {
  const { data, isLoading, refetch } = useQuery<LocationResponse>({
  queryKey: ['medicines', {page}],
  queryFn: () => api.getAllMedicines(page),
  retry: false,
  refetchOnWindowFocus: false,
  });
  
  return { data, isLoading, refetch };
};

export function sanitizeString(str:string) {
    if (str.length > 100) {
      return str.slice(0, 100);
    }
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }