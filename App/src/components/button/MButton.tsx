import React, { PureComponent } from 'react';
import MBaseButton from './MBaseButton';
import { AppStyle } from '../../helper/utils';

interface IProps {
  onPress?: () => void;
  style?: object;
  disabled?: boolean;
  onNetworkError?: () => void;
}

export default class MButton extends PureComponent<IProps> {
  render() {
    return (
      <MBaseButton
        onPress={this.props.onPress}
        style={[AppStyle.button, this.props.style]}
        disabled={this.props.disabled}
        onNetworkError={this.props.onNetworkError}
      >
        {this.props.children}
      </MBaseButton>
    );
  }
}
