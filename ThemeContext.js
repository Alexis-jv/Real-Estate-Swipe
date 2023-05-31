// ThemeContext.js

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
};
