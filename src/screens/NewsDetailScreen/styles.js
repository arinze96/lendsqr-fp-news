import {
    StyleSheet,
    Platform,
    Dimensions,
    StatusBar,
    useWindowDimensions,
  } from 'react-native';
  import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: GlobalStyles.Colors.generalWhite,
    },
    mainScrollView: {
      flexGrow: 1,
      width: width,
      alignItems: "center",
    },
    imageBackground: {width: '100%', height: '100%'},
    goBack:{width: '100%', height: '40%', paddingHorizontal: 15, paddingTop: 20},
    newsTitleWrapper:{width: '100%', height: '60%', paddingHorizontal: 15},
    newsTitleContainer:{width: '70%', height: '100%'},
    newsFeature:{
      width: 150,
      height: 30,
      backgroundColor: 'orange',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    newsFeatureText:{color: GlobalStyles.Colors.generalWhite},
    title: {color: GlobalStyles.Colors.generalWhite, fontSize: 30, fontWeight: 'bold'},
    detailsWrapper: {
      width: width,
      backgroundColor: GlobalStyles.Colors.generalWhite,
      marginTop: -30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    detailsContainer: {
      width: width,
      height: 50,
      paddingHorizontal: 30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: -20,
    },
    labelIcon:  {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      marginRight: 20,
      backgroundColor: GlobalStyles.Colors.generalGray3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4.84,

      elevation: 5,
    },
    shareIcon: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: GlobalStyles.Colors.generalGray3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4.84,

      elevation: 5,
    },
    newsSourceInformation: {width: width, height: 60, backgroundColor: 'white'},
    newsSourceContainer: {
      flexDirection: 'row',
      paddingHorizontal: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    imageContainer: {
      width: 40,
      height: 40,
      borderRadius: 40,
      backgroundColor: 'white',
    },
    userImage: {
      width: '100%',
      height: '100%',
      borderRadius: width / 2,
    },
    userDetails: {
      width: '80%',
      height: '100%',
      paddingLeft: 10,
    },
    userText: {fontSize: 20, fontWeight: 'bold', marginBottom: 5},
    mainNewsDetailsContainer: {paddingHorizontal: 30},
    allText: {letterSpacing: 1.5, lineHeight: 25, alignSelf: 'center'}
  });
  
  export default styles;
  