import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : {}]}
        android_ripple={{ color: '#fff' }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: '#fff',
    shadowColor: '#e67',
    overflow: Platform.select({ android: 'hidden' }),
    shadowOpacity: 0.15,
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CategoryGridTile;
