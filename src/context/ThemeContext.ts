// import React, { createContext, useContext, useState } from 'react';
// import { themes } from '../themes'; 


// interface Theme {
//     mode: string;
//     background: string;
//     text: string;
//     primary: string;
//     card: string;
//     border: string;
//     buttonBackground: string;
//     buttonText: string;
//     // Add more fields if your theme includes them
//   }

// interface ThemeContextType {
//     theme: Theme;
//     toggleTheme: () => void;
//     isDark: boolean;
//   }
  

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider = ({ children }) => {
//   const [themeName, setThemeName] = useState('light');

//   const toggleTheme = () => {
//     setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   const value = {
//     theme: themes[themeName],
//     toggleTheme,
//     isDark: themeName === 'dark',
//   };

//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
