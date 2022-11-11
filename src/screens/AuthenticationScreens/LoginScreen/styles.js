import {
    StyleSheet,
    Platform,
    Dimensions,
    StatusBar,
    useWindowDimensions,
  } from "react-native";
  import * as GlobalStyles from "../../../GLobalStyles/GlobalStyles";
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: GlobalStyles.Colors.generalWhite,
    },
    innerCard: {
      width: "100%",
      height: "80%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: GlobalStyles.Colors.primaryColor,
    },
    contentContainerStyles: {
      flexGrow: 1,
      alignItems: 'center',
    },
    pageCaptionHeader: {
      width: width,
      height: GlobalStyles.responsiveHeight(20),
      backgroundColor: GlobalStyles.Colors.generalBlack,
      borderBottomRightRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    logoStyles: {
      width: '20%',
      height: '20%',
    },
    captionText: {
      color: GlobalStyles.Colors.generalWhite,
      textAlign: 'center',
      paddingHorizontal: 10,
      fontSize: GlobalStyles.normalize(17),
      marginTop: 20,
    },
    textInputWrapper:{
      width: width,
      // height: GlobalStyles.responsiveHeight(50),
      paddingVertical: 30,
        // backgroundColor: 'gray',
      //   borderTopLeftRadius: 100,
      //   justifyContent: 'center',
      paddingHorizontal: 20,
    },
    textInputContainer: {
      width: '100%',
      height: GlobalStyles.normalize(55),
      marginBottom: 13,
      alignItems: 'center',
      justifyContent: 'center',
    },
    labelContainer: {
      width: '100%',
      height: '30%',
      borderRadius: 10,
      marginBottom: 7,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    errorMessage: { color: GlobalStyles.Colors.generalRed, fontSize: 10 },
    textInputBox: {
      width: '100%',
      height: '70%',
      borderWidth: 0.5,
      borderColor: GlobalStyles.Colors.generalGray02,
      borderRadius: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    textinputStyles: {width: '85%', height: '100%'},
    submitButton: {
      width: '100%',
      height: GlobalStyles.normalize(45),
      borderWidth: 0.5,
      marginTop: 30,
      backgroundColor: GlobalStyles.Colors.generalBlack,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      flexDirection: 'row',
    },
    submitButtonText: {fontSize: 12, color: GlobalStyles.Colors.generalWhite},
    registerWithGoogle:{
      flexDirection: 'row',
      height: '100%',
      width: '40%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    googleLogo:{width: '50%', height: '50%', marginRight: 10, marginLeft: -20}
  });
  
  export default styles;
  