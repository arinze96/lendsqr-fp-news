import {
    StyleSheet,
    Dimensions
  } from "react-native";
  import * as GlobalStyles from "../../GLobalStyles/GlobalStyles";
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: GlobalStyles.Colors.generalBlack,
    },
    imageWrapper:{
        width: width,
        height: '50%',
        backgroundColor: 'white',
        borderBottomRightRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageContainer:{
        width: GlobalStyles.normalize(250),
        height: GlobalStyles.normalize(250),
        borderRadius: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      reader:{width: '100%', height: '100%'},
      captionWrapper:{
        width: width,
        height: '50%',
        backgroundColor: 'white',
      },
      captionContainer:{
        borderTopLeftRadius: 100,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
      },
      logoImageContainer:{
        width: GlobalStyles.normalize(50),
        height: GlobalStyles.normalize(50),
        marginTop: -30,
        borderRadius: 50,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.Colors.generalWhite,
      },
      logoImage:{width: '50%', height: '50%'},
      captionBox:{
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: GlobalStyles.normalize(50),
        borderTopLeftRadius: GlobalStyles.normalize(150),
      },
      captionText:{
        color: 'white',
        alignItems: 'center',
        fontSize: GlobalStyles.normalize(25),
      },
      nextButton:{
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      getStartedButton:{
        borderRadius: 10,
        width: '80%',
        height: GlobalStyles.normalize(50),
        backgroundColor: '#00b300',
        justifyContent: 'center',
        alignItems: 'center',
      },
      getStartedButtonText:{
        color: 'white',
        alignItems: 'center',
        fontSize: GlobalStyles.normalize(15),
      }
    
  });
  
  export default styles;
  