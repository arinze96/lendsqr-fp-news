import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import * as GlobalStyles from '../../../GLobalStyles/GlobalStyles'
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../../components/CustomStatusBar/CustomStatusBar';
import NavBar from '../../../components/NavBar/NavBar';

const GoogleSignInWebView = () => {
  const navigation = useNavigation();
  return (
    <>
     <CustomStatusBar
        backgroundColor={GlobalStyles.Colors.generalBlack}
        barStyle={'light-content'}
      />
      <NavBar/>
      <WebView source={{uri: 'https://www.bbc.com/news'}} />

      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        back
      </Text>
    </>
  );
};

export default GoogleSignInWebView;
