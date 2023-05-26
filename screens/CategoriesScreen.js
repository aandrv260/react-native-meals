import { FlatList, ScrollView, View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.id,
      });
    };

    return <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler} />;
  };

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: '#3f2f25' }}
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
}
