import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// 화면 컴포넌트들
import HomeScreen from './HomeScreeen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import WebViewScreen from './WebViewScreen';

// 타입 정의
export type RootBottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
  WebView: undefined;
};

// 타입 정의된 네비게이션 prop 타입
type TabNavigationProps = BottomTabNavigationProp<RootBottomTabParamList>;
type TabRouteProp = RouteProp<RootBottomTabParamList>;

// 네비게이션 prop 및 route에 대한 타입 정의
type TabScreenProps = {
  navigation: TabNavigationProps;
  route: TabRouteProp;
};

// 네비게이터 생성
const Tab = createBottomTabNavigator<RootBottomTabParamList>();

// 탭 네비게이션 컴포넌트
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Explore':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'WebView':
              iconName = focused ? 'earth' : 'earth-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ title: '탐색' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: '프로필' }} />
      <Tab.Screen name="WebView" component={WebViewScreen} options={{ title: '웹뷰' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
