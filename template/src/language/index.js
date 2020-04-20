import * as RNLocalize from 'react-native-localize';
import I18n from 'i18n-js';
import zh from './locales/zh.json';
import en from './locales/en.json';


const i18n = I18n;

i18n.translations = {
  zh, en,
};

export const getSystemLanguage = () => {
  let locale = 'en';
  // RNLocalize.getLocales() see https://github.com/react-native-community/react-native-localize#method-type
  const locales = RNLocalize.getLocales();
  const currentLocale = locales[0];
  // scriptCode: Hant 繁體中文 Hans 简体中文
  if (currentLocale.languageCode === 'zh') {
    locale = 'zh';
  }
  return locale;
};

/**
 * about i18n-js see https://github.com/fnando/i18n-js
 */
export default i18n;
