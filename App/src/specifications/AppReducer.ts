import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { searchReducer } from './search/reducer';
import { homeReducer } from './home/reducer';
import { informationReducer } from './information/reducer';
import { locationReducer } from './location/reducer';
import { menuReducer } from './menu/reducer';
import { commonReducer } from './common/reducer';
import { favoritesReducer } from './favorites/reducer';

const AppReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
  home: homeReducer,
  search: searchReducer,
  location: locationReducer,
  information: informationReducer,
  favorites: favoritesReducer,
  menu: menuReducer
});

export default AppReducer;
