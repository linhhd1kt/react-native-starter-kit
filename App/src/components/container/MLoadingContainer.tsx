import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { AppColor } from '../../helper/utils';

interface IProps {
  isLoading: boolean;
  style?: object;
}

export default class NLoadingContainer extends PureComponent<IProps> {
  render() {
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        {this.props.children}
        {this.props.isLoading ? (
          <ActivityIndicator
            style={styles.indicator}
            size="small"
            color={AppColor.foreground}
          />
        ) : null}
      </SafeAreaView>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.background,
    flex: 1
  },
  keyboard_container: {},
  indicator: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
