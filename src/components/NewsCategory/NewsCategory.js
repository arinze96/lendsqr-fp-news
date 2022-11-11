import {View, ScrollView, Pressable, Text} from 'react-native';
import React from 'react';
import * as GlobalStyles from '../../GLobalStyles/GlobalStyles';
import {Action} from '../../Data/Data';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {switchTheme} from '../../redux/themSlice';

const NewsCategory = query => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.appTheme.theme);

  const [activeAction, setActiveAction] = React.useState('Home');

  return (
    <View style={styles.AllNews}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        {Action.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                setActiveAction(item.label);
              }}
              style={{
                ...styles.NewsContainer,
                backgroundColor:
                  item.label == activeAction
                    ? GlobalStyles.Colors.primaryColor
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
  );
};

export default NewsCategory;
