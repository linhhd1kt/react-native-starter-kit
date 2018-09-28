import React, { PureComponent } from 'react';

import { Text, StyleSheet } from 'react-native';

interface IProps {
  style?: object;
  numberOfLine?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

export default class MLabel extends PureComponent<IProps> {
  render() {
    return (
      <Text
        {...this.props}
        style={[styles.text, this.props.style]}
        numberOfLines={this.props.numberOfLine}
        ellipsizeMode={this.props.ellipsizeMode}
      >
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {}
});
