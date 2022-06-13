import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import MovieItem from "../components/MovieItem";
import Movie from "../models/Movie";
import Constants from "expo-constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class Home extends Component {
  _isMount = false;

  state = {
    isLoading: false,
    recentMovies: [],
    popularMovies: [],
  };

  componentDidMount() {
    this._isMount = true;
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=64e30881e1b296cfe4e5691562de4631"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const data = [];
        responseJson.results.forEach((movie) => {
          data.push(
            new Movie({
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              backdrop_path: movie.backdrop_path,
              genre_ids: movie.genre_ids,
              overview: movie.overview,
              popularity: movie.popularity,
              vote_average: movie.vote_average,
              vote_count: movie.vote_count,
              release_date: movie.release_date,
            })
          );
        });
        this.setState({
          popularMovies: data,
        });
      })
      .catch((error) => console.error(error));
  }
  componentWillUnmount() {
    this._isMount = false;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Movies</Text>
          <MaterialCommunityIcons name="magnify" />
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.homeView}>
            {this.state.popularMovies.map((item, index) => {
              return index < 5 ? <MovieItem item={item} /> : <View />;
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    paddingVertical: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight:"bold"
  },
  homeView: {
    flexDirection: "row",
    flex: 1,
    paddingLeft: 20,
  },
});
