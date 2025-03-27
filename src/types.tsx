import { JSX } from "react";

export type ChildrenType = string | JSX.Element | JSX.Element[];

export interface LocationResponse {
    items: number;
    total: number;
    page: number;
    data: LocationItem[];
  }
  
  export interface LocationItem {
    id: string;
    countryCode: string;
    orgID: string;
    orgNameEn: string;
    orgNameLt?: string;
    en: {
      country: string;
      city: string;
      address: string;
      state?: string;
      county?: string;
    };
  }