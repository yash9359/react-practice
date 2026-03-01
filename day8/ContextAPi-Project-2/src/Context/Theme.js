import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    //variable
    themeMode: 'light',

    //method
    darkTheme: ()=>{},
    lightTheme: () =>{},
})

// wahi contextProvider
export const ThemeProvider = ThemeContext.Provider

///custom Hook
export default function useTheme() {
    
    return useContext(ThemeContext);

}