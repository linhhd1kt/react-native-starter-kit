import React from 'react';
import { View, Text } from 'react-native';
import { headerTitle } from '../NavigationOptions';
import { NavigationScreenProps } from 'react-navigation';
import HomeButton from '../common/HomeButton';

interface IProps {}

interface IStates {}

export default class Information extends React.PureComponent<IProps, IStates> {
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
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Information screen</Text>
      </View>
    );
  }
}
