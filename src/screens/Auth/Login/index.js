import React, { Component } from 'react';
import {
  Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View,
} from 'react-native';
import i18n from '../../../language';
import service from './service';

class LoginSrceen extends Component {
  loginRender = () => {
    const title = 'Sign into your account';
    return (
      <View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 80,
        }}
        >
          <View style={styles.logo} />
          <Text style={styles.title}>{title}</Text>
        </View>
        {this.loginBtn()}
      </View>
    );
  }

  loginBtn = () => {
    const title = i18n.t('SIGN_BTN');
    return (
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          service.LoginTackAction();
        }}
      >
        <Image source={require('../../../static/images/white_apple_logo.png')} style={styles.logoBtn} />
        <Text style={[styles.btnTitle]}>{title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.loginRender()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  btnContainer: {
    height: 44,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  btnTitle: {
    fontSize: 19,
    color: '#ffffff',
  },
  logoBtn: {
    width: 44,
    height: 44,
  },
  title: {
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#dbdede',
    borderRadius: 40,
  },
});

export default LoginSrceen;
