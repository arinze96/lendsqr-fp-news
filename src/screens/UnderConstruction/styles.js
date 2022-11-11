import { StyleSheet, Dimensions } from "react-native";
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles'
const width = Dimensions.get("window").width;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalStyles.Colors.generalWhite,
      },
    goBack:{width: '100%', paddingHorizontal: 15, paddingTop: 20},

});

export default styles;
