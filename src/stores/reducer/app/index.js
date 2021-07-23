import { CHANGE_LANGUAGE, CHANGE_LANGUAGE_ASYNC, CHANGE_FONT_SIZE } from '../../constant/app';
import { getSystemLanguage } from '../../../language';

export const changeLanguageAction = (language) => ({
  type: CHANGE_LANGUAGE,
  language,
});

export const changeFontScaleAction = (fontScaleKey) => ({
  type: CHANGE_FONT_SIZE,
  fontScaleKey,
});


export const changeLanguageAsyncAction = (language) => ({
  type: CHANGE_LANGUAGE_ASYNC,
  language,
});

const initialState = {
  language: getSystemLanguage(),
  fontScaleKey: 'default',
};


export const Reducer = (state = initialState, action) => {
  const { type, language, fontScaleKey } = action;
  switch (type) {
    case CHANGE_LANGUAGE:
      return { ...state, ...{ language } };
    case CHANGE_FONT_SIZE:
      return { ...state, ...{ fontScaleKey } };
    default:
      return state;
  }
};
