import React from 'react';
import { View, Text } from 'react-native';
import { headerTitle } from '../NavigationOptions';
import HomeButton from '../common/HomeButton';
import { NavigationScreenProps } from 'react-navigation';

interface IProps {}
interface IStates {}

export default class Location extends React.PureComponent<IProps, IStates> {
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
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Location screen</Text>
      </View>
    );
  }
}
