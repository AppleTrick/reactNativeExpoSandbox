import React from 'react';
import { View, Text, Button } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from './TabNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { CompositeScreenProps } from '@react-navigation/native';

type ProfileScreenProps = CompositeScreenProps<BottomTabScreenProps<RootBottomTabParamList, 'Profile'>, StackScreenProps<RootStackParamList>>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
  console.log(navigator);
  console.log(route);

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
