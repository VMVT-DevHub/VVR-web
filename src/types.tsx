import { JSX } from "react";

export type ChildrenType = string | JSX.Element | JSX.Element[];

export interface MedicineResponse {
  items: number;
  total: number;
  page: number;
  data: MedicineItems[];
  query:{
     filter:{
      id: number;
      groups?: number[];
      terms?: number[];
    }[];
    id:string;
    search:string;
  }
}

export interface MedicineItems {
  id: string;
  holder: string;
  date:string;
  ingredients: string[];
  species: string[];
  code: string;
  name: string;
  status: string;
  legal: string;
  legalCode: number;
  packRange: string;
}

interface NameItem {
  name: string;
  code: number;
  type: string;
}

interface CodeTypeLanguage {
  code: number;
  name: string;
  type: string;
  lang: boolean;
}

 interface AllCountries {
  code: number;
  type: string;
  countries: SecondaryCountries[];
  name:string;
  reglCountry: SecondaryCountries;
}

interface SecondaryCountries {
  code: number;
  type: string;
}

interface Organization {
  loc: string;
  org: string;
  name: string;
  country?: string;
  city: string;
  address: string;
}

interface Tissue {
  code: number;
  type: string;
  lang: boolean;
  alt?: string;
}

export interface WithdrawalPeriod {
  num: number;
  tissue?: Tissue;
  code: number;
  type: string;
  lang: boolean;
  descr?: string;
}

export interface Species {
  withdrawalPeriod: WithdrawalPeriod[];
  code: number;
  type: string;
  lang: boolean;
  alt?:string;
}

export interface Route {
  species: Species[];
  code: number;
  type: string;
  lang: boolean;
}

interface AdminProduct {
  ingredients: number[];
  routes: Route[];
}

interface MfctItem {
  id: number;
  ingredients: number[];
  dose: CodeTypeLanguage;
  presentation: CodeTypeLanguage;
}

export interface PackItem {
  num: number;
  name: string;
  ref: number;
  code: number;
  type: string;
  lang: boolean;
}

export interface Pack {
  id?:string;
  name: string;
  language: CodeTypeLanguage;
  marketing: {
    date: string;
    code: number;
    type: string;
    lang: boolean;
  };
  quantity: {
    num: number;
    code: number;
    type: string;
    lang: boolean;
  };
  items: PackItem[];
}

interface Denominator{
  code: string;
  name:string;
  num:number;
  type:string
}

interface Numerator{
  code: string;
  name:string;
  num:number;
  type:string
}

interface Substance {
  name: string;
  names: string[];
  denominator: Denominator;
  numerator: Numerator;
  code: number;
  type: string;
  lang: boolean;
}

interface CodeType {
  code: string;
  lang: boolean;
  type: string;
}

export interface Documents{
  category: CodeType;
  content: string;
  date: string
  id: string;
  lang: string;
  name: string;
  type: CodeType;
}

export interface Indication{
  species: [
    {
      code: number;
      type: string;
      alt?: string;
    }
  ],
  text: string[];
}


export interface MedicineDetail {
  id: number;
  code: string;
  date:string;
  documents: Documents[];
  name?: string;
  names?: NameItem[];
  status?: CodeTypeLanguage;
  type?: CodeTypeLanguage;
  case?: {
    name: string;
    code: number;
    type: string;
    lang: boolean;
  };
  indications?:Indication[];
  packRange: string;
  legal?: CodeTypeLanguage;
  basis?: CodeTypeLanguage;
  holder?: Organization;
  packs?: Pack[];
  mfctOps?: Organization[];
  reference?: CodeTypeLanguage[];
  classif?: CodeTypeLanguage[];
  extension?: CodeTypeLanguage;
  admProd?: AdminProduct[];
  mfctItem?: MfctItem[];
  ingredients?: Ingredients[];
  reglCase?: AllCountries;
}

 interface Substances {
  code: number | string;
  denominator: Denominator;
  numerator: Numerator;
  lang: boolean;
  name: string;
  names: string[];
  type: string;
}

export interface Ingredients {
  code: number | string;
  id: number;
  concentration: boolean;
  lang: boolean;
  substance: Substances;
  type: string;
}

export interface Ingredient {
  concentration: boolean;
  substance: Substance;
  code: number;
  type: string;
  lang: boolean;
}
export interface Filters {
  terms: {
    species: [number, string, string?][];
    doseForm: [number, string, string?][];
    legalCode: [number, string, string?][];
    reglCase: [number, string, string?][];
  }
  groups: FilterGroups[]
}


export interface FiltersType {
  species: [number, string, string?][];
  doseForm: [number, string, string?][];
  legalCode: [number, string, string?][];
  reglCase: [number, string, string?][];
}

export interface Groups {
  groups: Groups[];
  id: number;
  name: string;
  terms: number[];
  parent: number;
}

export interface FilterGroups {
  id: number;
  name: string;
  terms: number[];
  groups?: FilterGroups[];
  parent: number;
  list?: keyof FiltersType;
}

 export interface ProcessedFilterGroup {
  id: number;
  name: string;
  terms: [number, string][];
  groups: ProcessedFilterGroup[];
  parent: number;
  list?: keyof FiltersType;
}


export interface FilterPOST {
  limit: number,
  desc: true,
  page: number;
  search: string;
  query?:string;
  filter: {
    id: number;
    groups?: number[];
    terms?: number[]
  }[]
}
