import React, { PureComponent } from 'react';
import MIConButton from '../../components/button/MIconButton';

interface IProps {
  onPress?: () => void;
}

export default class HomeButton extends PureComponent<IProps> {
  render() {
    return <MIConButton onPress={this.props.onPress} iconName="ic_home" />;
  }
}
