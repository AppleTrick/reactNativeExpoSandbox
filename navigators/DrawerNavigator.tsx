import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import HomeScreen from '../screens/HomeScreeen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WebViewScreen from '../screens/WebViewScreen';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

// 커스텀 헤더 영역
const CustomHeader = ({ navigation }: any) => (
  <View
    style={{
      marginTop: 50,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'tomato',
    }}
  >
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ marginRight: 10 }}>
      <Ionicons name="menu" size={24} color="#fff" />
    </TouchableOpacity>
    <Text style={{ color: '#fff', fontSize: 18 }}>커스텀 헤더</Text>
  </View>
);

// 커스텀 드로우 영역
const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* 프로필 영역 */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // 사용자 프로필 이미지
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>닉네임</Text>
      </View>

      {/* 기본 드로어 항목 */}
      <View style={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </View>
    </View>
  );
};

const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerPosition: 'left',
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    {/* BottomNavigator에 CustomHeader를 직접 추가 */}
    <Drawer.Screen
      name="BottomNavigation"
      component={() => (
        <>
          <CustomHeader navigation={useNavigation()} />
          <BottomNavigator />
        </>
      )}
      options={{ title: '메인' }}
    />
    <Drawer.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
    <Drawer.Screen name="Explore" component={ExploreScreen} options={{ title: '탐색' }} />
    <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: '프로필' }} />
    <Drawer.Screen name="WebView" component={WebViewScreen} options={{ title: '웹뷰' }} />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
});

export default DrawerNavigator;
