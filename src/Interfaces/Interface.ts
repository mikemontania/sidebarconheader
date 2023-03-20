import { IconType } from "react-icons";

 
export interface SidebarUseStateType {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
 } 
 export interface ThemeContextProps {
    theme: string;
    setTheme: (value: string) => void; 
}
 
export interface SidebarContainer {
    readonly isOpen: boolean;
    readonly themeUse: string;
  };
  export interface SidebarLabel {
     readonly istheme: string;
  };

export  interface SidebarItem {
    label: string,
    Icon:  IconType,
    Component:  () => JSX.Element,
    to: string,
    path:string,
}


 
export interface ThemeStylesObject{
    bgtgderecha:string,
    body: string,
    text: string,
    bodyRgba: string,
    textRgba: string,
    carouselColor: string,
    fontxs: string,
    fontsm:string,
    fontmd:string,
    fontlg: string,
    fontxl: string,
    fontxxl: string,
    fontxxxl: string,
    fontButton: string,
    navHeight: string,
    whiteBg:string,
    bg:string,
    bgAlpha:string,
    bg2:string,
    bg3: string, 
    primary: string,
    bg4:string,
    bgtotal:string,
    barrascroll: string, 
    gray900: string,
    gray800:string,
    gray700: string,
    gray600: string,
    gray500: string,
    gray400: string,
    gray300: string,
    gray200:string,
    gray100:string, 
    green500: string,
    olive500:string, 
    white: string, 
    textprimary: string,
    textsecondary: string,
    texttertiary: string,
     darkbackground:string, 
    darkcheckbox: string
}