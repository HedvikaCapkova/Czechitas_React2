import { createContext, useContext, useState } from 'react';

export const PrefsContext = createContext();

export const usePrefs = () => useContext(PrefsContext);

export const PrefsProvider = ({ children }) => {
  const [prefs, setPrefs] = useState(true);

  const setVeganOnly = (newWalue) => {
    setPrefs({ ...prefs, veganOnly: newWalue });
  };

  return (
    <PrefsContext.Provider value={{ ...prefs, setVeganOnly: setVeganOnly }}>
      {children}
    </PrefsContext.Provider>
  );
};
