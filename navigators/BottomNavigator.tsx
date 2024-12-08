import React from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// 화면 컴포넌트들
import HomeScreen from '../screens/HomeScreeen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WebViewScreen from '../screens/WebViewScreen';
import CustomHeader from '../components/Header/CustomHeader';

// 타입 정의
export type RootBottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
  WebView: undefined;
  hi: undefined;
};

// 타입 정의된 네비게이션 prop 타입
type BottomTabNavigationProps = BottomTabNavigationProp<RootBottomTabParamList>;
type BottomTabRouteProp = RouteProp<RootBottomTabParamList>;

// 네비게이션 prop 및 route에 대한 타입 정의
type TabScreenProps = {
  navigation: BottomTabNavigationProps;
  route: BottomTabRouteProp;
};

// 네비게이터 생성
const Tab = createBottomTabNavigator<RootBottomTabParamList>();

//
interface BottomNavigatorProps {
  initialRouteName: keyof RootBottomTabParamList;
}

// 탭 네비게이션 컴포넌트
const BottomNavigator: React.FC<BottomNavigatorProps> = ({ initialRouteName }) => {
  return (
    <>
      <CustomHeader navigation={useNavigation()} />
      <Tab.Navigator
        initialRouteName={initialRouteName}
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
    </>
  );
};

export default BottomNavigator;
