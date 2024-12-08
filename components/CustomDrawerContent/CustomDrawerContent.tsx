import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, View } from 'react-native';

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

export default CustomDrawerContent;
