import React from 'react';
import { View, Text } from 'react-native';

import { NavigationScreenProps } from 'react-navigation';
import { headerTitle } from '../NavigationOptions';
import HomeButton from '../common/HomeButton';

interface IProps {}

interface IStates {}

export default class Favorites extends React.PureComponent<IProps, IStates> {
  static navigationOptions = (props: NavigationScreenProps) => {
    return {
      title: headerTitle,
      headerLeft: <HomeButton onPress={() => props.navigation.goBack(null)} />
    };
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Favorites screen</Text>
      </View>
    );
  }
}
