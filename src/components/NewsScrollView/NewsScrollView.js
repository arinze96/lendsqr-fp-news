import {View, Image, ScrollView, Pressable, Text} from 'react-native';
import React from 'react';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';

const NewsScrollView = ({newsFeed}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.appTheme.theme);
  const navigation = useNavigation();
  return (
    <View style={styles.featuredNews}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredNewsScrollView}>
        {newsFeed.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate('NewsDetailScreen', item);
              }}
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
                    <View style={{ ...styles.promoted, backgroundColor: theme == 'dark'
                      ? GlobalStyles.Colors.generalOrange
                      : GlobalStyles.Colors.generalWhite }}>
                      <Text
                        style={{
                          color:
                            theme == 'dark'
                              ? GlobalStyles.Colors.generalWhite
                              : GlobalStyles.Colors.generalBlack,
                          marginLeft: 5,
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
                <View
                  style={{
                    width: '100%',
                    height: '80%',
                    justifyContent: 'center',
                  }}>
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
                  <Text
                    numberOfLines={1}
                    style={{
                      ...styles.txt3,
                      color:
                        theme == 'dark'
                          ? GlobalStyles.Colors.generalWhite
                          : GlobalStyles.Colors.generalBlack,
                    }}>
                    {item.topic}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      ...styles.txt3,
                      color:
                        theme == 'dark'
                          ? GlobalStyles.Colors.generalWhite
                          : GlobalStyles.Colors.generalBlack,
                    }}>
                    {item.summary}
                  </Text>
                  <Text
                    numberOfLines={1}
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
                {/* <Text></Text> */}
                {/* <Text>{item.published_date}</Text> */}
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NewsScrollView;
