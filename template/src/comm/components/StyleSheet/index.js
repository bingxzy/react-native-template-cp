/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { StyleSheet as RNStyleSheet, Dimensions, PixelRatio } from 'react-native';
import Config from './config';

const { width, height } = Dimensions.get('window');

const { guidelineBaseWidth, guidelineBaseHeight, scalingFactor } = Config;

let horizontalFactor;

let verticalFactor;

// let adimensionalFactor;

const calculateFactors = () => {
  horizontalFactor = (width / guidelineBaseWidth) * scalingFactor;
  verticalFactor = (height / guidelineBaseHeight) * scalingFactor;
  // adimensionalFactor = (horizontalFactor + verticalFactor) / 2;
};
calculateFactors();
console.log(height);
console.log(width);

console.log(`水平比例${horizontalFactor}`);
console.log(`垂直比例${verticalFactor}`);

const PROPERTIES_DEPENDING_ON_WIDTH = [
  'width',
  'marginLeft',
  'marginRight',
  'marginHorizontal',
  'paddingLeft',
  'paddingRight',
  'paddingHorizontal',
  'borderLeftWidth',
  'borderRightWidth',
  'left',
  'right',
  'minWidth',
  'maxWidth',
];
const PROPERTIES_DEPENDING_ON_HEIGHT = [
  'height',
  'marginTop',
  'marginBottom',
  'marginVertical',
  'paddingTop',
  'paddingBottom',
  'paddingVertical',
  'borderTopWidth',
  'borderBottomWidth',
  'top',
  'bottom',
  'minHeight',
  'maxHeight',
  'lineHeight',
];
const PROPERTIES_DEPENDING_ON_NEITHER = [
  'fontSize',
  'margin',
  'padding',
  'borderWidth',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
];

// const scaleHorizontally = (size = 0) => PixelRatio.roundToNearestPixel(size * horizontalFactor);
// const scaleVertically = (size = 0) => PixelRatio.roundToNearestPixel(size * verticalFactor);
// const scaleWithAverageRatio = (size = 0) => PixelRatio.roundToNearestPixel(size * adimensionalFactor);

const scaleHorizontally = (size = 0) => PixelRatio.roundToNearestPixel(size * 1);
const scaleVertically = (size = 0) => PixelRatio.roundToNearestPixel(size * 1);
const scaleWithAverageRatio = (size = 0) => PixelRatio.roundToNearestPixel(size * 1);

export const StyleSheet = {
  ...RNStyleSheet,
  scaleHorizontally,
  scaleVertically,
  scaleWithAverageRatio,
  create: (styles) => {
    const newStyles = {};
    for (const key in styles) {
      const style = styles[key];
      newStyles[key] = { ...style };
      const isExistWH = (Object.keys(style).filter((v) => ['width', 'height'].includes(v))).length === 2;
      let isSquare = false;
      if (isExistWH) {
        isSquare = style.width === style.height;
      }
      for (const property in style) {
        const propName = property;
        const value = style[propName];
        if (typeof value === 'number') {
          if (PROPERTIES_DEPENDING_ON_WIDTH.includes(propName)) {
            newStyles[key][propName] = scaleHorizontally(value);
          }
          if (PROPERTIES_DEPENDING_ON_HEIGHT.includes(propName)) {
            if (propName === 'height' && isSquare) {
              newStyles[key][propName] = scaleHorizontally(value);
            } else {
              newStyles[key][propName] = scaleVertically(value);
            }
          }
          if (PROPERTIES_DEPENDING_ON_NEITHER.includes(propName)) {
            if (propName === 'borderRadius' && isSquare) {
              newStyles[key][propName] = scaleHorizontally(value);
            } else {
              newStyles[key][propName] = scaleWithAverageRatio(value);
            }
          }
        }
      }
    }
    return RNStyleSheet.create(newStyles);
  },
  createUnscaled: RNStyleSheet.create,
};
