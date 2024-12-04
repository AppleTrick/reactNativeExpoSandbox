import React from 'react';
import { View, Text, Button } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/StackNavigator';
import { RootBottomTabParamList } from '../navigators/BottomNavigator';

// type ProfileScreenProps = CompositeScreenProps<BottomTabScreenProps<RootBottomTabParamList, 'Profile'>, StackScreenProps<RootStackParamList>>;

const ProfileScreen: React.FC = ({ navigation, route }: any) => {
  const handleLogin = () => {
    navigation.navigate('SocialLogin');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>프로필 화면</Text>
      <Button title="로그인" onPress={handleLogin} />
    </View>
  );
};

export default ProfileScreen;
