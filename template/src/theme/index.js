import React, { useEffect, useState, useContext } from 'react';
import utils from '../utils';
import THEMES from './theme.json';
import { THEME_ID } from '../comm/constant';

export const defThemeID = THEMES[0].key;

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeID, setThemeID] = useState(defThemeID);

  useEffect(() => {
    (async () => {
      try {
        const storedThemeID = await utils.asyncStoage.getData(THEME_ID);
        setThemeID(storedThemeID);
      } catch (error) {
        setThemeID(defThemeID);
        utils.asyncStoage.storeData(THEME_ID, defThemeID);
      }
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeID, setThemeID }}>
      {themeID ? children : null}
    </ThemeContext.Provider>
  );
};

export const withTheme = (Component) => (props) => {
  const { themeID, setThemeID } = useContext(ThemeContext);

  const getTheme = (id) => THEMES.find((theme) => theme.key === id);
  const setTheme = (id) => {
    const idx = THEMES.findIndex((theme) => theme.key === id);
    if (idx > -1) {
      utils.asyncStoage.storeData(THEME_ID, id);
      setThemeID(id);
    } else {
      utils.asyncStoage.storeData(THEME_ID, defThemeID);
      setThemeID(defThemeID);
    }
  };
  return (
    <Component
      {...props}
      themes={THEMES}
      theme={getTheme(themeID)}
      setTheme={setTheme}
    />
  );
};

export const withAppContainerTheme = (AppContainer) => (props) => {
  const { themeID } = useContext(ThemeContext);
  const { appRef } = props;
  const getTheme = (themeId) => THEMES.find((theme) => theme.key === themeId);

  return (
    <AppContainer
      {...props}
      ref={appRef}
      screenProps={{ theme: getTheme(themeID) }}
    />
  );
};
