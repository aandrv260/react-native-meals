import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

export default function MealsList({ items }) {
  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderMealItem} keyExtractor={item => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
