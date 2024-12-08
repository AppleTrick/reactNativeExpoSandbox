import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import CustomDrawerContent from '../components/CustomDrawerContent/CustomDrawerContent';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeTab" options={{ title: '홈' }}>
        {() => <BottomNavigator initialRouteName="Home" />}
      </Drawer.Screen>
      <Drawer.Screen name="ExploreTab" options={{ title: '탐색' }}>
        {() => <BottomNavigator initialRouteName="Explore" />}
      </Drawer.Screen>
      <Drawer.Screen name="ProfileTab" options={{ title: '프로필' }}>
        {() => <BottomNavigator initialRouteName="Profile" />}
      </Drawer.Screen>
      <Drawer.Screen name="WebViewTab" options={{ title: '웹뷰' }}>
        {() => <BottomNavigator initialRouteName="WebView" />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

{
  /* <Drawer.Screen
      name="BottomNavigation"
      component={() => (
        <>
          <CustomHeader navigation={useNavigation()} />
          <BottomNavigator />
        </>
      )}
      options={{ title: '메인' }}
    />
    <Drawer.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
    <Drawer.Screen name="Explore" component={ExploreScreen} options={{ title: '탐색' }} />
    <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: '프로필' }} />
    <Drawer.Screen name="WebView" component={WebViewScreen} options={{ title: '웹뷰' }} /> */
}
