import React from 'react';
import { StatusBar } from 'react-native';
import { withTheme } from '../../../theme';


const ThemeStatusBar = ({ theme }) => {
  const isLight = ['blue', 'red'].includes(theme.key);
  const barStyle = isLight ? 'light-content' : 'dark-content';
  return (
    <StatusBar barStyle={barStyle} backgroundColor={theme.color.primary || '#ffffff'} />
  );
};

export default withTheme(ThemeStatusBar);
