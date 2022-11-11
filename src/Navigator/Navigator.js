import React from 'react';
import {
  Dimensions,
  Linking
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import SignUpScreen from '../screens/AuthenticationScreens/SignUpScreen/SignUpScreen';
import LoginScreen from '../screens/AuthenticationScreens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen/NewsDetailScreen';
import * as GlobalStyles from '../GLobalStyles/GlobalStyles';
import Splash from '../screens/Splash/Splash';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GoogleSignInWebView from '../screens/AuthenticationScreens/GoogleSignInWebView/GoogleSignInWebView';
const {height, width} = Dimensions.get('window');
import {useSelector, useDispatch} from 'react-redux';
import UnderConstruction from '../screens/UnderConstruction/UnderConstruction';
import { useNavigation } from '@react-navigation/native';

const AuthStacks = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <AuthStacks.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome">
      <AuthStacks.Screen
        component={SignUpScreen}
        name="SignUpScreen"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStacks.Screen
        component={LoginScreen}
        name="LoginScreen"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </AuthStacks.Navigator>
  );
};

const HomeStacks = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <HomeStacks.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.RevealFromBottomAndroid,
      }}
      initialRouteName="Home">
      <HomeStacks.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <HomeStacks.Screen
        component={NewsDetailScreen}
        name="NewsDetailScreen"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
       <AuthStacks.Screen
        component={GoogleSignInWebView}
        name="GoogleSignInWebView"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
       <AuthStacks.Screen
        component={UnderConstruction}
        name="UnderConstruction"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </HomeStacks.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useSelector(state => state.appTheme.theme);
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor:
          theme == "light"
            ? GlobalStyles.Colors.generalWhite
            : GlobalStyles.Colors.generalBlack1,
        borderTopColor:
          theme == "light"
            ? GlobalStyles.Colors.generalWhite
            : GlobalStyles.Colors.generalBlack1,
      },
      tabBarActiveTintColor:
        theme == "light"
          ? GlobalStyles.Colors.generalBlack
          : GlobalStyles.Colors.generalWhite,
      tabBarInactiveTintColor:
        theme == "light"
          ? GlobalStyles.Colors.generalBlack
          : GlobalStyles.Colors.generalWhite,
    }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={
          {
              tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                  name="home"
                  size={20}
                  color={
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalWhite
                      : GlobalStyles.Colors.generalBlack
                  }
                />
              ),
          }
        }
      />
      <Tab.Screen
        name="Search"
        component={UnderConstruction}
        options={
          {
              tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                onPress={() => {navigation.navigate('UnderConstruction')}}
                  name="search"
                  size={20}
                  color={
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalWhite
                      : GlobalStyles.Colors.generalBlack
                  }
                />
              ),
          }
        }
      />
      <Tab.Screen
        name="Bookmark"
        component={UnderConstruction}
        options={
          {
              tabBarIcon: () => (
                <Icon
                  name="bookmark"
                  onPress={() => {navigation.navigate('UnderConstruction')}}
                  size={20}
                  color={
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalWhite
                      : GlobalStyles.Colors.generalBlack
                  }
                />
              ),
          }
        }
      />
      <Tab.Screen
        name="Breaking News"
        component={UnderConstruction}
        options={
          {
              tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                  name="bolt"
                  onPress={() => {navigation.navigate('UnderConstruction')}}
                  size={20}
                  color={
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalWhite
                      : GlobalStyles.Colors.generalBlack
                  }
                />
              ),
          }
        }
      />
      <Tab.Screen
        name="Notification"
        component={UnderConstruction}
        options={
          {
              tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                  name="bell"
                  onPress={() => {navigation.navigate('UnderConstruction')}}
                  size={20}
                  color={
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalWhite
                      : GlobalStyles.Colors.generalBlack
                  }
                />
              ),
          }
        }
      />
    </Tab.Navigator>
  );
};

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <RootStack.Screen
        component={Splash}
        name="Splash"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <RootStack.Screen
        component={OnboardingScreen}
        name="OnboardingScreen"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <RootStack.Screen
        component={SignUpScreen}
        name="SignUpScreen"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <RootStack.Screen
        component={LoginScreen}
        name="LoginScreen"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <RootStack.Screen
        component={HomeStack}
        name="HomeStack"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <RootStack.Screen
        component={AuthStack}
        name="AuthStack"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
       <RootStack.Screen
        component={BottomTabNavigator}
        name="BottomTabNavigator"
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
