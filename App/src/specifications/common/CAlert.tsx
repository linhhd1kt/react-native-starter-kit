import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppColor, AppStyle } from '../../helper/utils';
import MLabel from '../../components/label/MLabel';
import MButton from '../../components/button/MButton';
import { strings } from '../../i18n';
import * as Animate from 'react-native-animatable';
import MBaseButton from '../../components/button/MBaseButton';

interface IProps {
  visible: boolean;
  onCancel?: () => void;
  onsubmit?: () => void;
  message: string;
  type: 'error' | 'confirm';
}

interface IStates {}

export default class CAlert extends React.PureComponent<IProps, IStates> {
  _renderConfirmButton = () => {
    switch (this.props.type) {
      case 'error':
        return (
          <MBaseButton onPress={this.props.onsubmit} style={styles.button}>
            <MLabel style={styles.button_text}>{strings('common.ok')}</MLabel>
          </MBaseButton>
        );

      case 'confirm':
        return (
          <View style={styles.button_container}>
            <MBaseButton
              onPress={this.props.onCancel}
              style={styles.button_cancel}
            >
              <MLabel style={styles.button_text}>
                {strings('common.cancel')}
              </MLabel>
            </MBaseButton>
            <View style={styles.vertical_line} />
            <MBaseButton
              onPress={this.props.onsubmit}
              style={styles.button_submit}
            >
              <MLabel style={styles.button_text}>{strings('common.ok')}</MLabel>
            </MBaseButton>
          </View>
        );
      default:
        break;
    }
  };

  render() {
    if (this.props.visible) {
      return (
        <Animate.View
          animation="fadeIn"
          duration={300}
          style={styles.container}
        >
          <View style={styles.layer} />
          <Animate.View
            animation="zoomIn"
            duration={300}
            style={styles.message_container}
          >
            <MLabel style={styles.message}>{this.props.message}</MLabel>
            <View style={styles.line} />
            {this._renderConfirmButton()}
          </Animate.View>
        </Animate.View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  layer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'gray',
    opacity: 0.5
  },
  message_container: {
    ...AppStyle.container,
    shadowColor: 'black',
    width: '80%',
    shadowRadius: 10,
    shadowOffset: { width: 20, height: 20 },
    elevation: 20
  },
  message: {
    fontSize: 18,
    color: AppColor.darkText,
    margin: 20,
    textAlign: 'center'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: AppColor.foreground
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    fontWeight: '500',
    fontSize: 17,
    color: AppColor.foreground
  },
  button_container: {
    flexDirection: 'row'
  },
  button_cancel: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  vertical_line: {
    height: '100%',
    width: 1,
    backgroundColor: AppColor.foreground
  },
  button_submit: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
