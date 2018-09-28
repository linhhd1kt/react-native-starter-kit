import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class NKeyboardAwareContainer extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.keyboard_container}
          extraScrollHeight={120}
        >
          {this.props.children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  keyboard_container: {}
});
