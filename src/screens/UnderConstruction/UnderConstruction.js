import {View, Dimensions, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
const width = Dimensions.get('window').width;
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const UnderConstruction = () => {
  const theme = useSelector(state => state.appTheme.theme);
  const navigation = useNavigation()

  return (
    <>
      <CustomStatusBar
        backgroundColor={
          theme == 'dark'
            ? GlobalStyles.Colors.generalBlack1
            : GlobalStyles.Colors.generalWhite
        }
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
      />
      <View
        style={{
          ...styles.goBack,
          backgroundColor:
            theme == 'dark'
              ? GlobalStyles.Colors.generalBlack1
              : GlobalStyles.Colors.generalWhite,
        }}>
        <Icon
          name="arrow-left"
          onPress={() => {
            navigation.goBack();
          }}
          size={20}
          color={
            theme == 'dark'
              ? GlobalStyles.Colors.generalWhite
              : GlobalStyles.Colors.generalBlack
          }
        />
      </View>
      <View
        style={{
          ...styles.container,
          backgroundColor:
            theme == 'dark'
              ? GlobalStyles.Colors.generalBlack1
              : GlobalStyles.Colors.generalWhite,
        }}>
        <View
          style={{
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
          }}>
          <Image
            style={{height: '80%', width: '80%'}}
            source={require('../../../assets/images/undraw_under_construction_46pa.png')}
          />
          <View>
            <Text
              style={{
                fontSize: 30,
                color:
                  theme == 'dark'
                    ? GlobalStyles.Colors.generalWhite
                    : GlobalStyles.Colors.generalBlack,
              }}>
              Under construction
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default UnderConstruction;
