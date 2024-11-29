import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

// 스크린 컴포넌트들
import HomeScreen from './screens/HomeScreeen';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Text, View } from 'react-native';

// 타입 정의
export type RootBottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
};

// 타입 안전한 탭 네비게이터 생성
const Tab = createBottomTabNavigator<RootBottomTabParamList>();

// 타입 정의된 네비게이션 prop 타입
type TabNavigationProps = BottomTabNavigationProp<RootBottomTabParamList>;
type TabRouteProp = RouteProp<RootBottomTabParamList>;

// 네비게이션 prop 및 route에 대한 타입 정의
type TabScreenProps = {
  navigation: TabNavigationProps;
  route: TabRouteProp;
};

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
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
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
