import React, { Component } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import fontScaleConfig from './config';

class MyText extends Component {
    ScaleTextAction = () => {
      const { style, fontScaleKey } = this.props;
      const currStyle = StyleSheet.flatten(style);
      if (currStyle) {
        const currFontSize = currStyle.fontSize || 12;
        const newStyle = { ...currStyle, ...{ fontSize: currFontSize + fontScaleConfig[fontScaleKey] } };
        return newStyle;
      }
    }


    render() {
      const { children } = this.props;
      return (
        <RNText
          allowFontScaling={false}
          {...this.props}
          style={this.ScaleTextAction()}
        >
          {children}
        </RNText>
      );
    }
}
MyText.defaultProps = {
  style: [],
};

const mapStateToProps = (state) => ({
  fontScaleKey: state.app.fontScaleKey || 'default',
});

const Text = connect(mapStateToProps)(MyText);

export default Text;
