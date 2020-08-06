import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1988164Navigator from '../features/BlankScreen1988164/navigator';
import ArticleList88147Navigator from '../features/ArticleList88147/navigator';
import ArticleList88146Navigator from '../features/ArticleList88146/navigator';
import ArticleList88145Navigator from '../features/ArticleList88145/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1988164: { screen: BlankScreen1988164Navigator },
ArticleList88147: { screen: ArticleList88147Navigator },
ArticleList88146: { screen: ArticleList88146Navigator },
ArticleList88145: { screen: ArticleList88145Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
