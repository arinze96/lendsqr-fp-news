import { StyleSheet, Platform, Dimensions, StatusBar } from "react-native";
import * as GlobalStyles from "../../GLobalStyles/GlobalStyles";
import { RFValue } from "react-native-responsive-fontsize";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  contentContainerStyle:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AllNews: {
    width: "100%",
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  NewsContainer: {
    height: "90%",
    justifyContent: "center",
    paddingHorizontal: RFValue(10),
    alignItems: "center",
    borderWidth: 1,
    marginRight: RFValue(5),
    borderRadius: 5,
    borderColor: GlobalStyles.Colors.generalGray1,
  }
});

export default styles;
