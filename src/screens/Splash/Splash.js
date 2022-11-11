import {View, StatusBar, ActivityIndicator} from 'react-native';
import styles from './styles';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const [loggedIn, setLoggedIn] = React.useState('');
  const [signedUp, setSignedUp] = React.useState('');
  const [onboarding, setOnboarding] = React.useState('');

  const getData = async () => {
    try {
      const logged_in = await AsyncStorage.getItem('@logged_in');
      const signed_up = await AsyncStorage.getItem('@signed_up');
      const onBoarding = await AsyncStorage.getItem('@onboarding');
      setLoggedIn(logged_in);
      setSignedUp(signed_up);
      setOnboarding(onBoarding);
      console.log('onboarding', onBoarding);
      console.log('signed_up', signed_up);
      console.log('logged_in', logged_in);
      if (onBoarding == null) {
        navigation.replace('OnboardingScreen');
      } else {
        if ((signed_up == 'true' && logged_in == 'false') || logged_in == null) {
          navigation.replace('LoginScreen');
        } else if (
          onBoarding == 'true' &&
          signed_up == 'true' &&
          logged_in == 'true'
        ) {
          navigation.replace('BottomTabNavigator');
        } else {
          navigation.replace('AuthStack');
        }
      }
    } catch (error) {
      alert(error.code);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      getData();
    }, 5000);
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: GlobalStyles.Colors.generalWhite,
      }}>
      <StatusBar
        backgroundColor={GlobalStyles.Colors.generalWhite}
        barStyle={'dark-content'}
      />
      <ActivityIndicator
        size="small"
        color={GlobalStyles.Colors.generalBlack}
      />
    </View>
  );
};

export default Splash;
