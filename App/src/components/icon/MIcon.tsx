import React, { PureComponent } from 'react';
import { Image, ImageRequireSource } from 'react-native';
import { AppStyle } from '../../helper/utils';
import MImage from '../image/MImage';

interface IProps {
  name: string;
  style?: object;
}

interface IStates {}

export default class MIcon extends PureComponent<IProps, IStates> {
  render() {
    return (
      <MImage
        style={[AppStyle.icon, this.props.style]}
        name={this.props.name}
      />
    );
  }
}
