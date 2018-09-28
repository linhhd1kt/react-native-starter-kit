import React, { PureComponent } from 'react';
import MIcon from '../icon/MIcon';
import MBaseButton from './MBaseButton';

interface IProps {
  onPress?: () => void;
  style?: object;
  disabled?: boolean;
  onNetworkError?: () => void;
  size?: number;
  iconName: string;
}

interface IStates {
  isEnable: boolean;
}

export default class MIConButton extends PureComponent<IProps, IStates> {
  constructor(props) {
    super(props);
  }

  render() {
    var iconStyle = null;
    if (this.props.size) {
      iconStyle = { width: this.props.size, height: this.props.size };
    }
    return (
      <MBaseButton
        onPress={this.props.onPress}
        style={this.props.style}
        disabled={this.props.disabled}
        onNetworkError={this.props.onNetworkError}
      >
        <MIcon name={this.props.iconName} style={iconStyle} />
      </MBaseButton>
    );
  }
}
