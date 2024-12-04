import { createStackNavigator } from '@react-navigation/stack';
import SocialLoginScreen from '../screens/SocialLoginScreen';
import BottomNavigator from './BottomNavigator';
import DrawerNavigator from './DrawerNavigator';

export type RootStackParamList = {
  MainTabs: undefined;
  SocialLogin: undefined;
  Drawer: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'card',
      }}
    >
      {/* <Stack.Screen name="MainTabs" component={BottomNavigator} /> */}

      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="SocialLogin" component={SocialLoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
