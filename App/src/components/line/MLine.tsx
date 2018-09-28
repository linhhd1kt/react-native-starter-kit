import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { AppColor } from '../../helper/utils';

interface IProps {
  style?: object;
}

export default class MLine extends PureComponent<IProps> {
  render() {
    return (
      <View
        style={[
          { height: 1, backgroundColor: AppColor.lightGrayLine },
          this.props.style
        ]}
      />
    );
  }
}
