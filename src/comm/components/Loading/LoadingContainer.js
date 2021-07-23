import React from 'react';
import {
  View, ActivityIndicator, StyleSheet, Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');


const Loading = (props) => {
  const { isLoading, size, color } = props;
  return !isLoading
    ? (
      <View style={[styles.background]}>
        <View style={styles.loading}>
          <ActivityIndicator size={size} color={color} />
        </View>
      </View>
    ) : null;
};


Loading.defaultProps = {
  size: 'large',
  color: 'white',
  isHide: true,
  bgStyle: null,
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    position: 'absolute',
    zIndex: 10000000,
  },
  loading: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: (height - 100) / 2,
    left: (width - 100) / 2,
  },
});

export default Loading;
