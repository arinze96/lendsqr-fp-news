import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar
        backgroundColor={GlobalStyles.Colors.generalWhite}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/onboard.jpg')}
              style={styles.reader}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.captionWrapper}>
          <View style={styles.captionContainer}>
            <Animatable.View
              animation={'slideInDown'}
              style={styles.logoImageContainer}>
              <Image
                source={require('../../../assets/images/fplogo.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </Animatable.View>
            <Animatable.View animation={'slideInUp'} style={styles.captionBox}>
              <Text style={styles.captionText}>
                You one stop place for all trending news
              </Text>
            </Animatable.View>
            <Animatable.View
              animation={'slideInUp'}
              duration={2000}
              style={styles.nextButton}>
              <Pressable
                onPress={() => {
                  AsyncStorage.setItem('@onboarding', 'true');
                  navigation.navigate('SignUpScreen');
                }}
                style={styles.getStartedButton}>
                <Text style={styles.getStartedButtonText}>Get started</Text>
              </Pressable>
            </Animatable.View>
          </View>
        </View>
      </View>
    </>
  );
};

export default OnboardingScreen;
