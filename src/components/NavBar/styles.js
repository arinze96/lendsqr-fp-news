import { StyleSheet, Dimensions } from "react-native";
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles'
import { RFValue } from "react-native-responsive-fontsize";
const width = Dimensions.get("window").width;


const styles = StyleSheet.create({
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
        width: '40%',
      },
});

export default styles;
