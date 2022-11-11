import {
    Dimensions,
    PixelRatio,
    Platform,
    StatusBar,
  } from "react-native";
  import React, { useState } from "react";
  
  const Colors = {
    primaryColor: "rgb(160, 25, 25)",
    primaryColor1: "#df3a3a",
    primaryColor2: "#6e1212",
    lightPrimaryColor: "#fbe9e9",
    lightPrimaryColor1: "#f8d3d3",
    lightPrimaryColor2: "#ed9191",
    secondaryColor: "rgb(17, 15, 16)",
    secondaryColor1: "#262626",
    generalWhite: "#ffffff",
    generalLowWhite: "#fffffd",
    generalBlack: "#000000",
    generalBlack1: "#1a1a1a",
    generalBlack2: "#666666",
    generalBlack3: "#404040",
    opaqueBackground: "rgba(0, 0, 0, 0.3)",
    generalGray01: "#404040",
    generalGray02: "#8c8c8c",
    generalGray03: "#f2f2f2",
    generalGray0: "#F5F5F5",
    generalGray1: "#C0C0C0",
    generalGray2: "#F0F0F0",
    generalGray3: "#E8E8E8",
    generalOrange: "orange",
    generalGray4: "#F8F8F8",
    generalGray5: "#909090",
    generalGray7: "#f8f8f8",
    generalGray8: "#EAEAEA",
    facebookColor: "#4267B2",
    category: "#853de1",
    action: "#cd4b02",
    cardColor: "#f6f6f6",
    skeletonColor: "#e6e6ff",
    profileScreenBackgroundColor: "rgb(241, 243, 228)",
    boxOne: "rgb(243, 65, 110)",
    boxTwo: "rgb(21, 128, 212)",
    buttonBackground: "rgb(22, 162, 183)",
    buttonTextBackground: "rgb(208, 235, 243)",
    generalRed: "red",
    generalGreen: "#00e600",
    generalGreen1: "#00cc00",
    generalGreen2: "#e6ffe6",
    generalGreen3: "#80ff80",
    generalBlue: "blue",
    Dashboard0: "#a00f0f",
    Dashboard1: "#cf7000",
    Dashboard2: "#853de1",
    Dashboard3: "#007b0c",
    Dashboard4: "#26094b",
    generalRed: "#f93232",
    DetailScreen: "#f5eeee",
  };
  
  const DarkTheme = {
    mode: "dark",
  };
  
  const LightTheme = {
    mode: "light",
  };
  
  const OnboardingIconStyles = { width: 150, height: 150, tintColor: "white" };
  
  const X_WIDTH = 375,
    X_HEIGHT = 812,
    XSMAX_WIDTH = 414,
    XSMAX_HEIGHT = 896,
    { height, width } = Dimensions.get("window");
  
  const isIPhoneX = () =>
    Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS
      ? (width === X_WIDTH && height === X_HEIGHT) ||
        (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
      : false;
  const StatusBarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0,
  });
  
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;
  
  const normalize = (size) => {
    const newSize = size * scale;
    if (Platform.OS === "ios") {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  };
  
  const percentageCalculation = (max, val) => max * (val / 100);
  
  const fontCalculation = (height, width, val) => {
    const widthDimension = height > width ? width : height;
    const aspectRatioBasedHeight = (16 / 9) * widthDimension;
    return percentageCalculation(
      Math.sqrt(
        Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
      ),
      val
    );
  };
  const responsiveFontSize = (f) => {
    const { height, width } = Dimensions.get("window");
    return fontCalculation(height, width, f);
  };
  const responsiveHeight = (h) => {
    const { height } = Dimensions.get("window");
    return height * (h / 100);
  };
  const responsiveWidth = (w) => {
    const { width } = Dimensions.get("window");
    return width * (w / 100);
  };
  
  const STATUSBAR_HEIGHT = StatusBar.currentHeight;
  const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;
 

  export {
    Colors,
    OnboardingIconStyles,
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
    StatusBarHeight,
    DarkTheme,
    LightTheme,
    normalize,
  };
  