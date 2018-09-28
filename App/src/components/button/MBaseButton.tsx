import React, { PureComponent } from 'react';
import { TouchableOpacity, NetInfo } from 'react-native';
import { debounce } from 'lodash';

interface IProps {
  onPress?: () => void;
  style?: object;
  disabled?: boolean;
  onNetworkError?: () => void;
}

interface IStates {
  isEnable: boolean;
}

export default class MBaseButton extends PureComponent<IProps, IStates> {
  constructor(props) {
    super(props);

    this.state = {
      isEnable: true
    };
  }

  showNetworkErrorAlert = () => {
    this.props.onNetworkError && this.props.onNetworkError();
  };

  deBouncedOnPress = () => {
    NetInfo.getConnectionInfo().then(connectionInfo => {
      switch (connectionInfo.type) {
        case 'none':
          this.showNetworkErrorAlert();
          break;
        case 'unknown':
          this.showNetworkErrorAlert();
          break;
        case 'UNKNOWN':
          this.showNetworkErrorAlert();
          break;
        default:
          this.props.onPress && this.props.onPress();
      }
    });
  };

  onPress = debounce(this.deBouncedOnPress, 1000, {
    leading: true,
    trailing: false
  });

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={this.onPress}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
