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
  holder: string;
  ingredients: string[];
  species: string[];
  code: string;
  name: string;
  status: string;
  legal: string;
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

interface Countries {
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
}

interface WithdrawalPeriod {
  num: number;
  tissue?: Tissue;
  code: number;
  type: string;
  lang: boolean;
  descr?: string;
}

interface Species {
  withdrawalPeriod: WithdrawalPeriod[];
  code: number;
  type: string;
  lang: boolean;
}

interface Route {
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

interface PackItem {
  num: number;
  ref: number;
  code: number;
  type: string;
  lang: boolean;
}

interface Pack {
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

interface Substance {
  name: string;
  names: string[];
  code: number;
  type: string;
  lang: boolean;
}

interface Ingredient {
  concentration: boolean;
  substance: Substance;
  code: number;
  type: string;
  lang: boolean;
}

export interface MedicineDetail {
  id: number;
  code: string;
  date:string;
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
  ingredients?: Ingredient[];
  reglCase?: Countries[]
}

 interface Substances {
  code: number | string;
  lang: boolean;
  name: string;
  names: string[];
  type: string;
}

export interface Ingredients {
  code: number | string;
  concentration: boolean;
  lang: boolean;
  substance: Substances;
  type: string;
}
