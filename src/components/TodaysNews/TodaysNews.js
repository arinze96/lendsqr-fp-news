import {View, Pressable, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

const TodaysNews = ({todaysNews}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.appTheme.theme);
  const navigation = useNavigation();

  return (
    <View style={{...styles.propertiesBox, flexWrap: 'wrap'}}>
      <>
        {todaysNews.map((item, index) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('NewsDetailScreen', item);
              }}
              key={index}
              style={{
                ...styles.newsContainer,
                backgroundColor:
                  theme == 'dark'
                    ? GlobalStyles.Colors.generalBlack3
                    : GlobalStyles.Colors.generalGray3,
              }}>
              <View
                style={{
                  ...styles.imageContainer,
                  backgroundColor:
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalBlack3
                      : GlobalStyles.Colors.generalGray3,
                }}>
                <View style={styles.overlay}>
                  <View style={styles.up}>
                    <View
                      style={{
                        ...styles.promoted,
                        backgroundColor:
                          theme == 'dark'
                            ? GlobalStyles.Colors.generalOrange
                            : GlobalStyles.Colors.generalWhite,
                      }}>
                      <Text
                        style={{
                          color:
                            theme == 'dark'
                              ? GlobalStyles.Colors.generalWhite
                              : GlobalStyles.Colors.generalBlack,
                          marginLeft: 5,
                          fontSize: RFValue(8),
                        }}>
                        {item.rank}
                      </Text>
                    </View>
                  </View>
                </View>
                <Image style={styles.imageStyles} source={{uri: item.media}} />
              </View>
              <View
                style={{
                  ...styles.txt1,
                  backgroundColor:
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalBlack3
                      : GlobalStyles.Colors.generalGray3,
                }}>
                <View>
                  <Text
                    numberOfLines={1}
                    style={{
                      ...styles.txt2,
                      color:
                        theme == 'dark'
                          ? GlobalStyles.Colors.generalWhite
                          : GlobalStyles.Colors.generalBlack,
                    }}>
                    {item.title.toUpperCase()}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        ...styles.txt3,
                        color:
                          theme == 'dark'
                            ? GlobalStyles.Colors.generalWhite
                            : GlobalStyles.Colors.generalBlack,
                      }}>
                      published {item.published_date}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        })}
      </>
    </View>
    // </View>
  );
};

export default TodaysNews;
