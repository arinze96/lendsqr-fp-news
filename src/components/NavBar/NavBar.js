import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
import {useSelector, useDispatch} from 'react-redux';
import {switchTheme} from '../../redux/themSlice';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useSelector(state => state.appTheme.theme);

  const changeDeviceUiModeToDarkOrLight = () => {
    if (theme == 'light') {
      dispatch(switchTheme('dark'));
      console.log(alert('switched to light'));
    } else {
      dispatch(switchTheme('light'));
      console.log(alert('switched to dark'));
    }
    return theme;
  };
  return (
    <View
      style={{
        ...styles.navBar,
        backgroundColor:
          theme == 'dark'
            ? GlobalStyles.Colors.generalBlack1
            : GlobalStyles.Colors.generalWhite,
      }}>
      <View>
        <Text
          style={{
            ...styles.pageCaption,
            color:
              theme == 'dark'
                ? GlobalStyles.Colors.generalWhite
                : GlobalStyles.Colors.generalBlack,
          }}>
          News
        </Text>
      </View>
      <View style={styles.navbarIconsContainer}>
        <Icon
          name="search"
          onPress={() => {navigation.navigate('UnderConstruction')}}
          color={
            theme == 'dark'
              ? GlobalStyles.Colors.generalWhite
              : GlobalStyles.Colors.generalBlack
          }
          size={20}
        />
        <Icon
          name="bell"
          onPress={() => {navigation.navigate('UnderConstruction')}}
          color={
            theme == 'dark'
              ? GlobalStyles.Colors.generalWhite
              : GlobalStyles.Colors.generalBlack
          }
          size={20}
        />
        <Icon
          name={theme == 'dark' ? 'moon' : 'moon'}
          style={{marginRight: 15}}
          onPress={() => {
            changeDeviceUiModeToDarkOrLight();
          }}
          size={20}
          color={
            theme == 'dark'
              ? GlobalStyles.Colors.generalWhite
              : GlobalStyles.Colors.generalBlack
          }
        />
      </View>
    </View>
  );
};

export default NavBar;
