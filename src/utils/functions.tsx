import { Documents } from "../types";

 export const handleDateDifference = (registrationDate: string) => {
    const today = new Date();

    const pastDate = new Date(registrationDate);
    const monthLater = new Date(pastDate);
    monthLater.setMonth(monthLater.getMonth() + 1);
    return today < monthLater;
  };

export const handlePreview = (data: Blob, isPreview:boolean, name:string) => {
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

export const sortByLanguage = ( a:Documents, b:Documents) => {
  if(a.lang == "lt")
  {
    return -1;
  }
  if(b.lang == "lt")
  {
    return 1;
  }
  return 0;
}

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

export const isSubset = (array1:number[], array2:number[]) => {
  const hashSet = new Set(array1)

  for(const num of array2)
  {
    if(!hashSet.has(num))
    {
      return false;
    }
  }
  return true;
}