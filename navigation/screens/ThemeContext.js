import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
