import { useContext, useLayoutEffect, useMemo } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { FavouritesContext } from '../store/context/favourites-context';
import { favouritesActions } from '../store/redux';

export default function MealDetailsScreen({ navigation, route }) {
  const { mealId } = route.params;
  const favouriteMealsIds = useSelector(({ favourites }) => favourites.ids);
  const dispatch = useDispatch();
  // const favouritesContext = useContext(FavouritesContext);
  // const favouriteMealsIds = ;

  const meal = useMemo(() => {
    return MEALS.find(curMeal => curMeal.id === mealId);
  }, [mealId]);

  const isMealFavourite = useMemo(() => {
    return favouriteMealsIds.includes(mealId);
  }, [favouriteMealsIds, mealId]);

  const headerButtonPressHandler = () => {
    const action = isMealFavourite ? 'removeFavourite' : 'addFavourite';
    // favouritesContext[action](mealId);

    dispatch(favouritesActions[action](mealId));

    // isMealFavourite ? dispatch(favouritesActions.)

    // if (isMealFavourite ){
    //   dispatch(favouritesActions.)
    // }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Meal',
      headerRight: () => {
        return (
          <IconButton
            icon={isMealFavourite ? 'star' : 'star-outline'}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>

      <MealDetails
        textStyle={{ color: '#fff' }}
        duration={meal.duration}
        affordability={meal.affordability}
        complexity={meal.complexity}
      />

      <View style={styles.listOuterContainer}>
        <View style={{}}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
  },

  image: {
    width: '100%',
    height: 350,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff',
  },

  listOuterContainer: { alignItems: 'center' },

  listContainer: {
    width: '80%',
  },
});
