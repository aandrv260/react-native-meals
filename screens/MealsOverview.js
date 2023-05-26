import { useLayoutEffect, useMemo } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';
import MealsList from '../components/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export default function MealsOverview({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = useMemo(
    () => MEALS.filter(meal => meal.categoryIds.includes(categoryId)),
    []
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId);

    navigation.setOptions({
      title: categoryTitle.title ?? 'Category',
    });
  }, [navigation, categoryId]);

  return <MealsList items={displayedMeals} />;
}
