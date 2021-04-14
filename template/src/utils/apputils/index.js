import { Dimensions, Platform } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const IS_IPHONEX = Platform.OS === 'ios'
  && !Platform.isPad
  && !Platform.isTVOS
  && (WINDOW_HEIGHT >= 812 || WINDOW_HEIGHT >= 896);

export const isAndroid = Platform.OS === 'android';

export default {

  isEmpty: (value) => ['', null, undefined].includes(value),

  delay: (interval) => new Promise((resolve) => {
    setTimeout(resolve, interval);
  }),
};
