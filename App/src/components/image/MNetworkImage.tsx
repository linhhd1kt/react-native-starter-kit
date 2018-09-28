import React, { PureComponent } from 'react';
import FastImage from 'react-native-fast-image';
interface IProps {
  uri: string;
  style?: object;
}

interface IStates {}

export default class MNetworkImage extends PureComponent<IProps, IStates> {
  render() {
    return (
      <FastImage
        style={this.props.style}
        source={{
          uri: this.props.uri,
          priority: FastImage.priority.normal
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  }
}
