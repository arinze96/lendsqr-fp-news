import {
  View,
  Image,
  ScrollView,
  RefreshControl,
  Dimensions,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome5';

import {useSelector, useDispatch} from 'react-redux';

const NewsDetailScreen = ({route}) => {
  const theme = useSelector(state => state.appTheme.theme);

  const navigation = useNavigation();
  const newsData = route.params;
  const [refresh, setRefresh] = React.useState(false);
  const pullToRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };
  return (
    <>
      <CustomStatusBar
        backgroundColor={
          theme == 'dark'
            ? GlobalStyles.Colors.generalBlack1
            : GlobalStyles.Colors.generalWhite
        }
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
      />
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
        <View style={{width: width, height: 300, backgroundColor: 'black'}}>
          <ImageBackground
            imageStyle={{opacity: 0.8}}
            style={{
              ...styles.imageBackground,
              backgroundColor:
                theme == 'dark'
                  ? GlobalStyles.Colors.generalBlack1
                  : GlobalStyles.Colors.generalWhite,
            }}
            source={{uri: newsData.media}}>
            <View style={styles.goBack}>
              <Icon
                name="arrow-left"
                onPress={() => {
                  navigation.goBack();
                }}
                size={20}
                color={
                  theme == 'dark'
                    ? GlobalStyles.Colors.generalWhite
                    : GlobalStyles.Colors.generalBlack
                }
              />
            </View>
            <View
              style={
                styles.newsTitleWrapper
              }>
              <View
                style={
                  styles.newsTitleContainer
                }>
                <View style={styles.newsFeature}>
                  <Text style={styles.newsFeatureText}>{newsData.topic}</Text>
                </View>
                <Text numberOfLines={3} style={styles.title}>
                  {newsData.title}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            ...styles.detailsWrapper,
            backgroundColor:
              theme == 'dark'
                ? GlobalStyles.Colors.generalBlack1
                : GlobalStyles.Colors.generalWhite,
          }}>
          <View style={styles.detailsContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.labelIcon}>
                <Icon
                  name="bookmark"
                  onPress={() => {
                    navigation.navigate('UnderConstruction');
                  }}
                  color={GlobalStyles.Colors.generalBlack}
                  size={20}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('GoogleSignInWebView');
                }}
                style={styles.shareIcon}>
                <Icon
                  name="share"
                  onPress={() => {
                    navigation.navigate('UnderConstruction');
                  }}
                  color={GlobalStyles.Colors.generalBlack}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              ...styles.newsSourceInformation,
              backgroundColor:
                theme == 'dark'
                  ? GlobalStyles.Colors.generalBlack1
                  : GlobalStyles.Colors.generalWhite,
            }}>
            <View style={styles.newsSourceContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.userImage}
                  source={require('../../../assets/images/imgbgc.jpeg')}
                />
              </View>
              <View style={styles.userDetails}>
                <Text
                  style={{
                    ...styles.userText,
                    color:
                      theme == 'dark'
                        ? GlobalStyles.Colors.generalWhite
                        : GlobalStyles.Colors.generalBlack,
                  }}>
                  {newsData.author}
                </Text>
                <Text
                  style={{
                    color:
                      theme == 'dark'
                        ? GlobalStyles.Colors.generalWhite
                        : GlobalStyles.Colors.generalBlack,
                  }}>
                  published {newsData.published_date}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.mainNewsDetailsContainer}>
            <Text
              style={{
                ...styles.allText,
                color:
                  theme == 'dark'
                    ? GlobalStyles.Colors.generalWhite
                    : GlobalStyles.Colors.generalBlack,
              }}>
              {newsData.summary}
            </Text>
          </View>
        </View>
        <View style={{width: width, height: 100}}></View>
      </ScrollView>
    </>
  );
};

export default NewsDetailScreen;
