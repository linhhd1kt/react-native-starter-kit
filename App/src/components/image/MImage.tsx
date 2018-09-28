import React, { PureComponent } from 'react';
import { Image, Platform } from 'react-native';
import { AppStyle } from '../../helper/utils';

interface IProps {
  name: string;
  style?: object;
}

interface IStates {}

export default class MImage extends PureComponent<IProps, IStates> {
  render() {
    return (
      <Image
        style={[AppStyle.image, this.props.style]}
        source={{
          uri:
            Platform.OS === 'ios'
              ? this.props.name
              : `asset:/${this.props.name}.png`
        }}
      />
    );
  }
}
