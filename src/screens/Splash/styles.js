import {
    StyleSheet,
    Platform,
    Dimensions,
    StatusBar,
    useWindowDimensions,
  } from "react-native";
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent:'center',
      backgroundColor: GlobalStyles.Colors.generalWhite,
    },
  });
  
  export default styles;
  