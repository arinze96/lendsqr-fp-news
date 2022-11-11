import { StyleSheet, Platform, Dimensions, StatusBar } from "react-native";
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../GLobalStyles/GlobalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: "center",
    backgroundColor: GlobalStyles.Colors.generalWhite,
  },
});

export default styles;
