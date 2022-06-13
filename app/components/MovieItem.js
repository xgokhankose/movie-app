import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
function MovieItem(props) {
  return (
    <View style={styles.item}>
      <Image
        style={styles.poster}
        source={{
          uri: "https://image.tmdb.org/t/p/w500" + props.item.poster_path,
        }}
      />
      <Text style={{ width: 171 }}>{props.item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginRight: 10,
  },
  poster: {
    width: 171,
    height: 255,
    borderRadius: 12,
    marginBottom: 10,
  },
});
export default MovieItem;
