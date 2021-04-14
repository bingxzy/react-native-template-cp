import {
  StyleSheet as RNStyleSheet
} from 'react-native';

export declare const StyleSheet :{
  scaleHorizontally(size: number): number;
  scaleVertically(size: number): number;
  scaleWithAverageRatio(size: number): number;
  create:typeof RNStyleSheet.create;
  createUnscaled: typeof RNStyleSheet.create;
  flatten<T>(style?: import("react-native").RegisteredStyle<T> | undefined): T;
  flatten(style?: import("react-native").StyleProp<TextStyle>): TextStyle;
  flatten(style?: import("react-native").StyleProp<ImageStyle>): ImageStyle;
  flatten(style?: import("react-native").StyleProp<ViewStyle>): ViewStyle;
  setStyleAttributePreprocessor(property: string, process: (nextProp: any) => any): void;
  hairlineWidth: number;
  absoluteFillObject: RNStyleSheet.AbsoluteFillStyle;
  absoluteFill: import("react-native").RegisteredStyle<RNStyleSheet.AbsoluteFillStyle>;
};