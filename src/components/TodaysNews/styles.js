import { StyleSheet, Platform, Dimensions, StatusBar } from "react-native";
import * as GlobalStyles from "../../GLobalStyles/GlobalStyles";
import { RFValue } from "react-native-responsive-fontsize";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../GLobalStyles/GlobalStyles";

const styles = StyleSheet.create({
  newsContainer: {
    width: '48%',
    height: "45%",
    marginBottom: RFValue(15),
    alignItems: "center",
    borderRadius: RFValue(10),
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
  },
  imageContainer: {
    width: "100%",
    height: "70%",
  },
  overlay: {
    width: "100%",
    height: "100%",
    zIndex: 5000,
    position: "absolute",
    justifyContent: "space-between",
    top: 0,
    left: 0,
  },
  up: {
    width: "100%",
    height: "35%",
    flexDirection: 'row',
    paddingHorizontal: RFValue(10),
    justifyContent: "space-between",
    alignItems: 'center'
  },
  promoted: {
    width: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: GlobalStyles.Colors.generalBlack,
  },
  promoted1: {
    width: '45%',
    height: '40%',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    backgroundColor: GlobalStyles.Colors.generalWhite,
  },
  classification: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10)
  },
  box1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(60)
  },
  box2: {
    width: "50%",
    marginTop: RFValue(-100),
    height: "40%",
  },
  iconBox: {
    flexDirection: "row",
    width: responsiveWidth(11),
    justifyContent: "space-between",
    paddingRight: RFValue(5),
  },
  propertiesBox: {
    width: width,
    paddingHorizontal: 15,
    height:  300,
    marginTop: RFValue(10),
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  txt1: {
    width: "100%",
    height: "30%",
    paddingHorizontal: RFValue(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txt2: { fontWeight: 'bold', fontSize: RFValue(7) },
  txt3: {fontSize: RFValue(5) },
  amountContainer: {
    width: "85%",
    height: "13%",
    flexDirection: 'row',
    paddingBottom: RFValue(4),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: RFValue(10),
    fontWeight: 'bold', 
    color: GlobalStyles.Colors.primaryColor,
  },
});

export default styles;
