import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

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

export default CustomHeader;
