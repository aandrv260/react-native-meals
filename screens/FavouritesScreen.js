import { useContext, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavouritesContext } from '../store/context/favourites-context';

export default function FavouritesScreen() {
  // const favouritesContext = useContext(FavouritesContext);
  const favouriteMealsIds = useSelector(({ favourites }) => favourites.ids);
  // To reduce Time Complexity from O(n^2) to O(n)
  const favouriteMealsIdsObject = useMemo(() => {
    return favouriteMealsIds.reduce((acc, cur) => {
      acc[cur] = true;

      return acc;
    }, {});
  }, [favouriteMealsIds]);

  const favouriteMeals = MEALS.filter(meal => favouriteMealsIdsObject[meal.id] === true);

  if (favouriteMeals.length === 0) {
    return (
      <View style={[styles.container, styles.noMealsContainer]}>
        <Text style={styles.noMealsText}>You have no favourite meals yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MealsList items={favouriteMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f2f25',
  },

  noMealsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  noMealsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
