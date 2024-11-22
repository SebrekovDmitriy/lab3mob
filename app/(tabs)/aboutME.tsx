import { StyleSheet, Text } from 'react-native';

export default function AboutME() {
  return <Text style={styles.container}>Hi! My name is Sebrekov Dmitriy.</Text>;  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: "auto",
    backgroundColor: "red",
    color: "white",
  },
});
