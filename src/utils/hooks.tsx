import { useQuery } from "@tanstack/react-query";
import api from "./api";
import { LocationResponse, MedicineDetail } from "../types";

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

export const useAllMedicines = (query: string, page: number, uat: boolean) => {
  const { data, isLoading, refetch } = useQuery<LocationResponse>({
    queryKey: ["medicines", { page, uat, query }],
    queryFn: () => api.getAllMedicines(query, page, uat),
    retry: false,
    // enabled: !!query
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, refetch };
};

export function sanitizeString(str: string) {
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

const handlePreview = (data: Blob, isPreview:boolean, name:string) => {
  if (data) {
    const href = URL.createObjectURL(data);
    
    if (isPreview) {
      window.open(href, "_blank");
    } else {
      const link = document.createElement("a");
      link.href = href;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(href);
    }
  }
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

