import React from 'react';
import { View } from 'react-native';
import { switchLanguage } from '../../helper/utils';
import { connect } from 'react-redux';
import { INavigation } from '../../interface';
import MTextButton from '../../components/button/MTextButton';

interface IProps {
  navigation: INavigation;
}

interface IStates {
  currentLanguage: 'en' | 'ja' | 'zh';
  alertVisible: boolean;
}

class Home extends React.PureComponent<IProps, IStates> {
  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: 'en',
      alertVisible: false
    };
  }

  componentWillMount() {
    switchLanguage('ja');
    this.setState({ currentLanguage: 'ja' });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray'
        }}
      >
        <MTextButton
          title="Login"
          onPress={() => this.props.navigation.navigate('tabBar')}
        />
      </View>
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
)(Home);
