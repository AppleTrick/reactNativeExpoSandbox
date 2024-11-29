import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../App';

type HomeScreenProps = BottomTabScreenProps<RootBottomTabParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>홈 화면</Text>
    </View>
  );
};

export default HomeScreen;
