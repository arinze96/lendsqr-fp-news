import { View, Text, StatusBar,Platform, SafeAreaView, StyleSheet } from 'react-native'
import * as GlobaStyles from '../../GLobalStyles/GlobalStyles'
import React from 'react'

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const CustomStatusBar = ({ backgroundColor, translucent, barStyle }) => {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar
          translucent={translucent}
          barStyle={barStyle}
          backgroundColor={backgroundColor}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    statusBar: {
      height: STATUSBAR_HEIGHT,
    },
    appBar: {
      backgroundColor: GlobaStyles.Colors.primaryColor,
      height: APPBAR_HEIGHT,
    }
  });

export default CustomStatusBar

