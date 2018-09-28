import React from 'react';
import { Picker, View } from 'react-native';

interface IProps {
  onTextChange?: (string) => void;
  initText: string;
}

interface IStates {
  text: string;
}

export default class NTextPicker extends React.PureComponent<IProps, IStates> {
  constructor(props) {
    super(props);

    this.state = {
      text: props.initText
    };
  }

  public render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Picker
          selectedValue={this.state.text}
          style={{ flex: 1 }}
          onValueChange={(itemValue, itemIndex) => {
            this.props.onTextChange && this.props.onTextChange(itemValue);
            this.setState({ text: itemValue });
          }}
        >
          <Picker.Item label="更新申請" value="更新申請" />
          <Picker.Item label="削除申請" value="削除申請" />
        </Picker>
      </View>
    );
  }
}
