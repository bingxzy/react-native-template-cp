import React from 'react';
import RootSiblings from 'react-native-root-siblings';
import LoadingContainer from './LoadingContainer';

let loader = null;
export default {
  show: () => {
    loader = new RootSiblings(<LoadingContainer isHide={true} />);
    return loader;
  },
  dimiss: (callback) => {
    if (loader) {
      loader.destroy(callback);
      loader = null;
    }
  },
};
