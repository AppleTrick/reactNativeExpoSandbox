import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../navigators/BottomNavigator';

// type HomeScreenProps = BottomTabScreenProps<RootBottomTabParamList, 'Home'>;

const HomeScreen: React.FC = ({ navigation, route }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>홈 화면</Text>
      <Button title="버튼 클릭" onPress={() => Alert.alert('간단한 버튼 클릭')} />
    </View>
  );
};

export default HomeScreen;
