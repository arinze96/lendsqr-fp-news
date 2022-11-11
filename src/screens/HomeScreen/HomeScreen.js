import {
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Dimensions,
  Text,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
import NewsScrollView from '../../components/NewsScrollView/NewsScrollView';
import TodayNews from '../../components/TodaysNews/TodaysNews';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles'

import axios from 'axios';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {Action} from '../../Data/Data';
import NavBar from '../../components/NavBar/NavBar';
import {switchTheme} from '../../redux/themSlice';

const HomeScreen = () => {
  const theme = useSelector(state => state.appTheme.theme);
  const [refresh, setRefresh] = React.useState(false);
  const [loading, setIsLoading] = React.useState(false);
  const [newsData, setNewsData] = React.useState([]);
  const [todayNewsData, setTodayNewsData] = React.useState([]);
  const [activeAction, setActiveAction] = React.useState('Home');
  const [query, setQuery] = React.useState('politics');

  const pullToRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };

  const options = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
    params: {
      q: query,
      lang: 'en',
      sort_by: 'relevancy',
      from: '2022/09/01',
      topic: 'politics',
      page: '1',
      page_size: '10',
      media: 'True',
    },
    headers: {
      'X-RapidAPI-Key': '30eed5633bmsh0d1833e036524b1p11fc3djsnda40813a6648',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com',
    },
  };

  const newsTodayOptions = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
    params: {
      q: query,
      lang: 'en',
      sort_by: 'relevancy',
      topic: 'politics',
      page: '1',
      page_size: '4',
      media: 'True',
    },
    headers: {
      'X-RapidAPI-Key': '30eed5633bmsh0d1833e036524b1p11fc3djsnda40813a6648',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com',
    },
  };

  const fetchNews = () => {
    axios
      .request(options)
      .then(function (response) {
        const result = response.data.articles;
        if (result) {
          setNewsData(result);
          setIsLoading(false);
        }
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const fetchNewsToday = () => {
    axios
      .request(newsTodayOptions)
      .then(function (response) {
        const result = response.data.articles;
        if (result) {
          setTodayNewsData(result);
        }
      })
      .catch(function (error) {
        alert(error);
        console.error(error);
      });
  };

  React.useEffect(() => {
    setIsLoading(true);
    fetchNews();
    fetchNewsToday();
  }, [query, refresh]);
  return (
    <View style={{  backgroundColor:
      theme == 'dark'
        ? GlobalStyles.Colors.generalBlack1
        : GlobalStyles.Colors.generalWhite
    }}>
      <CustomStatusBar
        backgroundColor={
          theme == 'dark'
            ? GlobalStyles.Colors.generalBlack1
            : GlobalStyles.Colors.generalWhite
        }
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
      />
      <NavBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          ...styles.mainScrollView,
          backgroundColor:
            theme == 'dark'
              ? GlobalStyles.Colors.generalBlack1
              : GlobalStyles.Colors.generalWhite,
        }}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={pullToRefresh} />
        }>
        {loading ? (
          <View
            style={{
              width: width,
              height: 600,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                theme == 'dark'
                  ? GlobalStyles.Colors.generalBlack1
                  : GlobalStyles.Colors.generalWhite,
            }}>
            <ActivityIndicator
              size="small"
              color={
                theme == 'dark'
                  ? GlobalStyles.Colors.generalWhite
                  : GlobalStyles.Colors.generalBlack
              }
            />
          </View>
        ) : (
          <>
            <View style={styles.AllNews}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  ...styles.contentContainerStyle,
                  backgroundColor:
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalBlack1
                      : GlobalStyles.Colors.generalWhite,
                }}>
                {Action.map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() => {
                        setActiveAction(item.label);
                        setQuery(item.label);
                      }}
                      style={{
                        ...styles.NewsContainer,
                        backgroundColor:
                          item.label == activeAction
                            ? GlobalStyles.Colors.generalOrange
                            : null,
                        borderColor:
                          theme == 'dark'
                            ? GlobalStyles.Colors.generalWhite
                            : GlobalStyles.Colors.generalGray1,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color:
                            theme == 'dark'
                              ? GlobalStyles.Colors.generalWhite
                              : item.label == activeAction
                              ? GlobalStyles.Colors.generalWhite
                              : GlobalStyles.Colors.generalBlack,
                        }}>
                        {item.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
            <View style={styles.sectionContainer1}>
              <Text
                style={{
                  ...styles.sectionTitle,
                  color:
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalWhite
                      : GlobalStyles.Colors.generalBlack,
                }}>
                Recommended
              </Text>
            </View>
            <NewsScrollView newsFeed={newsData} />
            <View style={styles.sectionContainer2}>
              <Text
                style={{
                  ...styles.sectionTitle,
                  color:
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalWhite
                      : GlobalStyles.Colors.generalBlack,
                }}>
                News Today
              </Text>
            </View>
            <TodayNews todaysNews={todayNewsData} />
            <View style={styles.sectionContainer3}>
              <Text
                style={{
                  ...styles.sectionTitle,
                  color:
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalWhite
                      : GlobalStyles.Colors.generalBlack,
                }}>
                Recommended
              </Text>
            </View>
            <NewsScrollView newsFeed={newsData.reverse()} />
            <View style={styles.sectionContainer4}>
              <Text
                style={{
                  ...styles.sectionTitle,
                  color:
                    theme == 'dark'
                      ? GlobalStyles.Colors.generalWhite
                      : GlobalStyles.Colors.generalBlack,
                }}>
                Recommended
              </Text>
            </View>
            <TodayNews todaysNews={todayNewsData} />
          </>
        )}
        <View style={{width: width, height: 100}}></View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;


