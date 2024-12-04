import React from 'react';
import { View, Text, Button } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../navigators/BottomNavigator';

type ExploreScreenProps = BottomTabScreenProps<RootBottomTabParamList, 'Explore'>;

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>탐색 화면</Text>
      <Text>Drawer 해보기</Text>
    </View>
  );
};

export default ExploreScreen;
