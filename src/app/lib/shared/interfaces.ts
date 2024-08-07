import { ButtonHTMLAttributes, ReactNode, SetStateAction } from "react";
import { RootState } from "../services/store";

export interface ModuleProps {
  children: ReactNode;
  // renderSharedUi?: boolean;
}
export abstract class ModuleFactory {
  static singletonInstance: any;
  static createInstances(): any {}
}

export type SetPage = (value: SetStateAction<number>) => void;
export type SetHasNextPage = (value: SetStateAction<boolean>) => void;
export type SetSearch = (value: SetStateAction<string>) => void;

export interface ApiCallStatus {
  status: "success" | "error" | "idle" | "loading";

  error?: {
    statusCode: number;
    message: string;
  };
}

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading: boolean;
}

export enum AxiosErrorStatus {
  BAD_REQUEST = 400,
}
// export type CategoriseSegment =
//   | "mobile"
//   | "electronic-devices"
//   | "book-and-media";
// export enum EnumsCategoriseSegment {
//   Mobile = "mobile",
//   ElectronicDevices = "electronic-devices",
//   BooKAndMedia = "book-and-media",
//   None = "",
// }
export enum CategoriseSegment {
  "mobile" = "mobile",
  "electronic-devices" = "electronic-devices",
  "book-and-media" = "book-and-media",
}

export type CategoriseSegmentValues = keyof typeof CategoriseSegment;

export interface Item {
  text: string;
  link: string;
}

export interface IMegaMenuListSection {
  label: Item;
  items: Item[];
}
export type Segments = keyof RootState;

export type UseSelectMethod<S extends keyof RootState> = (
  asHook: boolean
) => RootState[S];

export interface FormikCreate2 {
  language_id: string;
  content: string;
  media: File | null;
}
export interface FormikCreate3 {
  language_id: string;
  name: string;
  image: File | null;
  side: string;
}
export interface FormikCreate4 {
  map: File | null;
}
export interface FormikCreate5 {
  address: string;
  tel: string;
  lat: string;
  long: string;
  language_id: string;
  socialNetworks: SocialNetworkLink[];
}
export interface FormikCreate6 {
  product: string;
  os_name: string;
  link: string;
  language_id: string;
  image: File | null;
}
export interface FormikCreate7 {
  email: string;
  subject: string;
  content: string;
  department_id: string;
  file: File | null;
}
export interface FormikCreate8 {
  question: string;
  answer: string;
  language_id: string;
}
export type SocialNetworkLink = {
  social_id: string;
  link: string;
};
export type SocialNetwork = {
  icon: string;
  title: string;
  id: string;
};

export interface StaticParams {
  params: { id: string };
}
