import { StyleSheet, Text, View } from 'react-native';

export default function List({ data }) {
  return data.map(item => (
    <View style={styles.listItem} key={Math.random()}>
      <Text style={styles.itemText} key={Math.random()}>
        {item}
      </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },

  itemText: {
    color: '#3f2f25',
    textAlign: 'center',
  },
});
