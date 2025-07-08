import { Documents, FilterPOST } from "../types";
import rx from "../styles/images/Rx.svg";
import rxplus from "../styles/images/Rxplus.svg";
import otc from "../styles/images/Otc.svg";

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
  if (a.lang === "lt" && b.lang !== "lt") {
    return -1;
  }
  if (b.lang === "lt" && a.lang !== "lt") {
    return 1;
  }

  if (a.lang === "lt" && b.lang === "lt") {
    return 0;
  }
  if (a.lang === "en" && b.lang !== "en" && b.lang !== "lt") {
    return -1;
  }
  if (b.lang === "en" && a.lang !== "en" && a.lang !== "lt") {
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
  const hashSet = new Set(array1) // the longer one
//array2 is the subset
  for(const num of array2)
  {
    if(!hashSet.has(num))
    {
      return false;
    }
  }
  return true;
}
export const isFilterSelected = (rootID: number, groupID: number | null, terms: number[], filterValues:FilterPOST) => {
  const rootFilter = filterValues.filter.find(item => item.id === rootID);
  if (!rootFilter) return false;

  if (groupID !== null) {
    return rootFilter.groups?.includes(groupID) || false;
  } else {
    const selectedTerms = rootFilter.terms || [];
    return terms.length > 0 && isSubset(selectedTerms, terms);
  }
};
export const handlePrescription = (code: number | null | undefined) => {
    if (!code) return rx;
    switch (code) {
      case 200000017698:
        return rx;
      case 200000017695:
        return otc;
      case 200000017699:
        return rxplus;
      default:
        return rx;
    }
  };