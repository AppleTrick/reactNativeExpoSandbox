import { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';

// splash 화면이 자동으로 사라지는것을 방지
SplashScreen.preventAutoHideAsync();

// 애니메이션 설정 (선택적 옵션)
// SplashScreen.setOptions({
//   duration: 2000,
//   fade: true,
// });

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // 폰트 로딩
        await Font.loadAsync(Entypo.font);
        // 여기서 시간 설정이 가능
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
