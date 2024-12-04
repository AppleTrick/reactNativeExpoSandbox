import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreeen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WebViewScreen from '../screens/WebViewScreen';

const Drawer = createDrawerNavigator();

export type DrawerParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
  WebView: undefined;
};

const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerPosition: 'left',
    }}
  >
    <Drawer.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
    <Drawer.Screen name="Explore" component={ExploreScreen} options={{ title: '탐색' }} />
    <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: '프로필' }} />
    <Drawer.Screen name="WebView" component={WebViewScreen} options={{ title: '웹뷰' }} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
