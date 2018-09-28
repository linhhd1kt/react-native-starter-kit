import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { headerTitle } from '../NavigationOptions';
import HomeButton from '../common/HomeButton';

interface IProps {}

interface IStates {}

export default class Search extends React.PureComponent<IProps, IStates> {
  static navigationOptions = (props: NavigationScreenProps) => {
    return {
      title: headerTitle,
      headerLeft: (
        <HomeButton onPress={() => props.navigation.navigate('home')} />
      )
    };
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Search screen</Text>
      </View>
    );
  }
}
