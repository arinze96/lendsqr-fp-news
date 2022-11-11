import React from "react";
import {Platform, StyleSheet} from 'react-native'
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';


const styles = StyleSheet.create({
      title5: {
        width: GlobalStyles.normalize(250),
        height:GlobalStyles.normalize(16),
        paddingHorizontal: GlobalStyles.normalize(10),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'center',
      },
      label:{ 
        fontSize: GlobalStyles.normalize(11),
        marginTop: GlobalStyles.normalize(5),
        marginBottom: GlobalStyles.normalize(8)
      },
      error:{color: 'red', fontSize: GlobalStyles.normalize(10)},
      title6: {
        color: '#210A54',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      title17: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
        marginTop: 5,
      },
})

export default styles