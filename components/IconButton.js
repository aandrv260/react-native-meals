import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, onPress, color }) {
  return (
    <Pressable style={({ pressed }) => pressed && [styles.pressed]} onPress={onPress}>
      <Ionicons name={icon} size={24} color={color || '#fff'} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
