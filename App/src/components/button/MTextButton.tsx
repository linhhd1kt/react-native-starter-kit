import React, { PureComponent } from 'react';
import MBaseButton from './MBaseButton';
import { AppStyle } from '../../helper/utils';
import MLabel from '../label/MLabel';

interface IProps {
  title: string;
  onPress?: () => void;
  style?: object;
  disabled?: boolean;
  onNetworkError?: () => void;
  textStyle?: object;
}

export default class MTextButton extends PureComponent<IProps> {
  render() {
    return (
      <MBaseButton
        onPress={this.props.onPress}
        style={[AppStyle.button, this.props.style]}
        disabled={this.props.disabled}
        onNetworkError={this.props.onNetworkError}
      >
        <MLabel style={[AppStyle.button_text, this.props.textStyle]}>
          {this.props.title}
        </MLabel>
      </MBaseButton>
    );
  }
}
