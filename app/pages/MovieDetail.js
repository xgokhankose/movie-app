import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import ChipGroup from "../components/ChipGroup";

function MovieDetail({ navigation, route }) {
  const movieItemx = route.params.item;
  var genres = "";
  movieItemx.genres.map((genre, index) => {
    genres += genre + (index < movieItemx.genres.length - 1 ? ", " : "");
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          resizeMode={"cover"}
          style={styles.poster}
          source={{
            uri: "https://image.tmdb.org/t/p/w500/" + movieItemx.backdrop_path,
          }}
        />
        <View style={{ flex: 1, backgroundColor: "grey", padding: 20 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <View style={{ flexWrap: "wrap", flexDirection: "column" }}>
              <Text style={styles.title}>{movieItemx.title}</Text>
              <Text>{movieItemx.release_date}</Text>
            </View>
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: "white",
                borderRadius: 24,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{movieItemx.vote_average}</Text>
            </View>
          </View>

          <ChipGroup datas={movieItemx.genres} />

          <Text style={styles.header}>Overview</Text>
          <Text>{movieItemx.overview}</Text>
          <Text style={styles.header}>Teaser & Trailers</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  poster: {
    height: 281,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default MovieDetail;
