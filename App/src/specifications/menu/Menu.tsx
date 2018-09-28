import React from 'react';
import { View, Text } from 'react-native';

interface IProps {}

interface IStates {}

export default class Menu extends React.PureComponent<IProps, IStates> {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'brown',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Menu screen</Text>
      </View>
    );
  }
}
