import React from 'react';
import { View, Text, TouchableOpacity, Button, Alert } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from './TabNavigator';

type HomeScreenProps = BottomTabScreenProps<RootBottomTabParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>홈 화면</Text>
      <TouchableOpacity>
        <Text>소셜로그인창 띄우기</Text>
      </TouchableOpacity>
      <Button title="버튼 클릭" onPress={() => Alert.alert('간단한 버튼 클릭')} />
    </View>
  );
};

export default HomeScreen;
