import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './screens/TabNavigator';
import SocialLoginScreen from './screens/SocialLoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  MainTabs: undefined;
  SocialLogin: undefined;
};

export type RootBottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // 모달 스타일로 화면 표시
          presentation: 'card',
        }}
      >
        {/* 기본 메인 탭 네비게이션 */}
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        {/* 소셜 로그인 화면 */}
        <Stack.Screen name="SocialLogin" component={SocialLoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
