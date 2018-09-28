import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Home from './home/Home';
import Location from './location/Location';
import Search from './search/Search';
import Information from './information/Information';
import Favorites from './favorites/Favorites';
import Menu from './menu/Menu';
import Tutorial from './Tutorial';
import { strings } from '../i18n';
import MIConButton from '../components/button/MIconButton';

const locationStack = createStackNavigator({
  location: { screen: Location }
});

const searchStack = createStackNavigator({
  search: { screen: Search }
});

const informationStack = createStackNavigator({
  information: { screen: Information }
});

const favoritesStack = createStackNavigator({
  favorites: { screen: Favorites }
});

const menuStack = createStackNavigator({
  menu: { screen: Menu }
});

const tabBar = createBottomTabNavigator({
  Location: locationStack,
  Search: searchStack,
  Information: informationStack,
  Favorites: favoritesStack,
  Menu: menuStack
});

const rootStack = createStackNavigator(
  {
    home: { screen: Home },
    tabBar: { screen: tabBar }
  },
  {
    headerMode: 'none'
  }
);

export const AppNavigator = createSwitchNavigator({
  tutorial: { screen: Tutorial },
  root: { screen: rootStack }
});
