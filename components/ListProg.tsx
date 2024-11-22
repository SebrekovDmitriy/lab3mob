import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';

export type ListProps = {
    imagelag: string,
    progLag: string,
    langTitle: string,
  };

  const styles = StyleSheet.create({
    container: {
    marginBottom: 40,
    alignItems: "center",
    },
    item: {
    backgroundColor: '#A5A5A5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    },
    title: {
      fontSize: 40,
    },
    imageLog: {
    width: 100,
    height: 100,
    marginBottom: 40,
      },
  });

const ListProg = ({ imagelag, progLag, langTitle: langTitle} : ListProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: imagelag }} style={styles.imageLog} />
        <Text style={styles.title}>{langTitle}</Text>
      </View>
      <Text style={styles.item}>{progLag}</Text>
    </View>
  )
};

export default ListProg;