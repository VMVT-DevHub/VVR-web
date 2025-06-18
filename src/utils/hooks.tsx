import { useQuery } from "@tanstack/react-query";
import api from "./api";
import { FilterPOST, FiltersType, MedicineResponse, MedicineDetail } from "../types";
import { handlePreview } from "./functions";

export const useMedicine = (id: string, language: string, uat: boolean) => {
  const { data, isLoading, refetch } = useQuery<MedicineDetail>({
    queryKey: ["medicine", { id, language, uat }],
    queryFn: () => api.getMedicine(id, language, uat),
    enabled: !!id,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, refetch };
};

export const useMedicines = (params: FilterPOST, uat:boolean, language:string) => {
  const { data, isLoading, refetch } = useQuery<MedicineResponse>({
    queryKey: ["medicines", { params, uat, language }],
    queryFn: () => api.setFilters(params, uat, language),
    retry: false,
    // enabled: !!query
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, refetch };
};

export const useAllMedicines = (query: string, page: number, uat: boolean, language: string) => {
  const { data, isLoading, refetch } = useQuery<MedicineResponse>({
    queryKey: ["medicinesUnused", { page, uat, query, language }],
    queryFn: () => api.getAllMedicines(query, page, uat, language),
    retry: false,
    // enabled: !!query
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, refetch };
};

export const useFilters = (language: string) => {
  const { data, isLoading, refetch } = useQuery<FiltersType>({
    queryKey: ["filters", { language }],
    queryFn: () => api.getFilters(language),
    retry: false,
    enabled: true,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, refetch };
};

export const useFilterGroups = (language: string) => {
  const { data, isLoading, refetch } = useQuery<FiltersType>({
    queryKey: ["filterGroups", { language }],
    queryFn: () => api.getFilterGroups(language),
    retry: false,
    enabled: true,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, refetch };
};

export const useDocDownload = (
  doc_id: string,
  name: string,
  isPreview: boolean,
  id: string
) => {
  const {isFetching, refetch } = useQuery<Blob>({
    queryKey: ["documents", { doc_id, id, isPreview }],
    queryFn: async () => {
      const blob = await api.getDocuments(id!, doc_id);
      handlePreview(blob, isPreview, name);
      return blob;
    },
    retry: false,
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return { isFetching, refetch };
};






