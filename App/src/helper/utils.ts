import I18n from 'react-native-i18n';

// get color name here: http://chir.ag/projects/name-that-color/#FF6600
export const AppColor = {
  foreground: '#59A2D7',
  background: '#FFFFFF',
  lightGray1: '#F6F7F8',
  lightGray2: '#DDDDDD',
  grayText: '#333333',
  transparent: 'rgba(52, 52, 52, 0.2)',
  lightText: '#888888',
  grayButton: '#999999',
  darkText: '#111111',
  lightGrayLine: '#E2E4E9',
  lightGreen: '#F0F4F6',
  backgroundGreen: '#EFF7EC',
  freshGreen: '#74BA49',
  orange: '#F4B712',
  backgroundOrange: '#FBF4DF',
  red: '#EE5149'
};

export const AppStyle = {
  container: {
    borderRadius: 4,
    backgroundColor: AppColor.background
  },
  button: {
    height: 50,
    backgroundColor: AppColor.foreground,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    color: AppColor.background,
    fontSize: 18,
    fontWeight: '400',
    marginHorizontal: 20
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  image: {
    resizeMode: 'contain'
  }
};

export const switchLanguage = (code: 'en' | 'ja' | 'zh') => {
  I18n.locale = code;
};
