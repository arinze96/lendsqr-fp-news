import {
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
const width = Dimensions.get('window').width;
import {RFValue} from 'react-native-responsive-fontsize';
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
    alignItems: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AllNews: {
    width: '100%',
    height: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  NewsContainer: {
    height: '90%',
    justifyContent: 'center',
    paddingHorizontal: RFValue(10),
    alignItems: 'center',
    borderWidth: 1,
    marginRight: RFValue(5),
    borderRadius: 5,
    borderColor: GlobalStyles.Colors.generalGray1,
  },
  navBar: {
    width: width,
    height: 50,
    marginBottom: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pageCaption: {fontSize: RFValue(30), fontWeight: 'bold'},
  navbarIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '20%',
  },
  navbarIcons: {fontSize: RFValue(10), fontWeight: 'bold'},
  sectionTitle: {fontSize: RFValue(20), fontWeight: 'bold'},
  sectionContainer1: {
    width: width,
    height: 30,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  sectionContainer2: {
    width: width,
    height: 30,
    marginTop: RFValue(-30),
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  sectionContainer3: {
    width: width,
    height: 30,
    marginTop: RFValue(10),
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  sectionContainer4: {
    width: width,
    height: 30,
    marginTop: RFValue(-30),
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});

export default styles;
