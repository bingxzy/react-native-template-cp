import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import fontScaleConfig from './config';

const MyText = (props) => {
  const ScaleTextAction = () => {
    const { style, fontScaleKey } = props;
    const currStyle = StyleSheet.flatten(style);
    if (currStyle) {
      const currFontSize = currStyle.fontSize || 12;
      const newStyle = { ...currStyle, ...{ fontSize: currFontSize + fontScaleConfig[fontScaleKey] } };
      return newStyle;
    }
  };
  const { children } = props;
  return (
    <RNText
      allowFontScaling={false}
      {...props}
      style={ScaleTextAction()}
    >
      {children}
    </RNText>
  );
};
MyText.defaultProps = {
  style: [],
};

const mapStateToProps = (state) => ({
  fontScaleKey: state.app.fontScaleKey || 'default',
});

const Text = connect(mapStateToProps)(MyText);

export default Text;
