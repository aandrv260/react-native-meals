import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import MealDetails from './MealDetails';

export default function MealItem(props) {
  const { title, imageUrl, duration, complexity, affordability, id } = props;
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('MealDetailsScreen', { mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [pressed ? styles.buttonPressed : {}]}
        android_ripple={{ color: '#ccc' }}
        onPress={pressHandler}
      >
        <View>
          <Image source={{ uri: imageUrl, width: '100%', height: 200 }} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
    shadowOpacity: 0.15,
    overflow: Platform.select({ android: 'hidden' }),
  },

  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },

  buttonPressed: {
    opacity: Platform.select({ default: 1, ios: 0.7 }),
  },
});
