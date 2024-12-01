import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from './TabNavigator';

type ExploreScreenProps = BottomTabScreenProps<RootBottomTabParamList, 'Explore'>;

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>탐색 화면</Text>
    </View>
  );
};

export default ExploreScreen;
