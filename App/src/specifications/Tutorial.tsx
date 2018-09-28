import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView
} from 'react-native';
import { switchLanguage, AppColor } from '../helper/utils';
import { connect } from 'react-redux';
import { INavigation } from '../interface';
import { strings } from '../i18n';
import MLabel from '../components/label/MLabel';
import MButton from '../components/button/MButton';
import MIConButton from '../components/button/MIconButton';
import CAlert from './common/CAlert';
import MImage from '../components/image/MImage';
import MTextButton from '../components/button/MTextButton';
import MNetworkImage from '../components/image/MNetworkImage';

// TODO: 1. Alway using wrapper MButton, MLabel, MLoadingContainer, MKeyboardAwareContainer ...
// TODO: 2. Not using any type, using interface (interface folder) or enum ('a'| 'b' | 'c') instead
// TODO: 3. Using AppStyle for AppColor for easy setting and change theme
// TODO: 4. Localize on text by using strings refer to locales folder
// TODO: 5. Using react-native-fast-image for network image

interface IProps {
  // TODO: not using any, using interface define in interface folder navigation
  navigation: INavigation;
}

interface IStates {
  // TODO: using enum instead of string in some case
  currentLanguage: 'en' | 'ja' | 'zh';
  errorAlertVisible: boolean;
  confirmAlertVisible: boolean;
}

class Tutorial extends React.PureComponent<IProps, IStates> {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: 'en',
      errorAlertVisible: false,
      confirmAlertVisible: false
    };
  }

  componentWillMount() {
    // TODO: switch language
    switchLanguage('ja');
    this.setState({ currentLanguage: 'ja' });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header_container}>
            <MLabel style={styles.title_text}>Tutorial</MLabel>
            <MButton
              style={styles.close_button}
              onPress={() => this.props.navigation.navigate('root')}
            >
              <MLabel style={styles.close_text}>X</MLabel>
            </MButton>
          </View>
          <View style={styles.line} />
          {/*
        *TODO: Using MLabel sample
         */}
          <MLabel>Some text of MLabel</MLabel>
          <View style={styles.line} />
          <MLabel>{strings('home.welcome', { name: 'React Native' })}</MLabel>
          <View style={styles.line} />
          {/*
        * TODO: Using text button
          */}
          <MTextButton
            title="Text button"
            style={{ width: 300, height: 50 }}
            onPress={() => console.log('Text button did touch')}
          />
          <View style={styles.line} />
          {/*
        * TODO: Using MIConButton with image sample 
          */}
          <MIConButton
            iconName={'ic_calendar'}
            onPress={() => console.log('MButton with icon onPress')}
          />
          <View style={styles.line} />
          {/*
        * TODO: Using error alert sample
          */}
          <MButton
            style={{ width: 200, height: 50 }}
            onPress={() => this.setState({ errorAlertVisible: true })}
          >
            <MLabel>Show error alert</MLabel>
          </MButton>

          <View style={styles.line} />
          {/*
        * TODO: Using error alert sample
          */}
          <MButton
            style={{ width: 300, height: 50 }}
            onPress={() => this.setState({ confirmAlertVisible: true })}
          >
            <MLabel>Show confirm alert</MLabel>
          </MButton>
          <View style={styles.line} />

          <CAlert
            visible={this.state.confirmAlertVisible}
            onCancel={() => this.setState({ confirmAlertVisible: false })}
            onsubmit={() => this.setState({ confirmAlertVisible: false })}
            message="some confirm message"
            type="confirm"
          />
          <CAlert
            visible={this.state.errorAlertVisible}
            onsubmit={() => this.setState({ errorAlertVisible: false })}
            message="some error message"
            type="error"
          />
          {/*
        * TODO: For static image: using from native (Android/iOS) asset not get from react native folder for faster
          */}

          <View style={{ flexDirection: 'row' }}>
            <MImage name={'1'} style={{ width: 400, height: 400 }} />
          </View>
          <View style={styles.line} />
          {/*
        * TODO: For static image: using from native (Android/iOS) asset not get from react native folder for faster
          */}

          <View style={{ flexDirection: 'row' }}>
            <MNetworkImage style={{ width: 400, height: 400 }} uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WnzXzbr2hiB8lPq3n_p5fnQdvOMc3Ouummyk11uVylX-7rtdXA" />
          </View>
          <View style={styles.line} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutorial);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header_container: {
    flexDirection: 'row'
  },
  title_text: {
    flex: 1,
    fontSize: 32,
    color: AppColor.orange,
    textAlign: 'center'
  },
  line: {
    backgroundColor: AppColor.grayButton,
    height: 20,
    width: '100%'
  },
  close_button: {
    width: 80
  },
  close_text: {
    color: AppColor.background,
    fontSize: 30
  }
});
