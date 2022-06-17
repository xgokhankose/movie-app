import React, { Component } from "react";
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
import TeaserTrailer from "../models/TeaserTrailer";
import TrailerItem from "../components/TrailerItem";

class MovieDetail extends Component {
  movieItemx = null;
  constructor(props) {
    super(props);
    this.movieItemx = props.route.params.item;
  }
  state = {
    teaserTrailers: [],
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.movieItemx.id +
        "/videos?api_key=64e30881e1b296cfe4e5691562de4631"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        var items = [];
        responseJson.results.map((movie) => {
          items.push(
            new TeaserTrailer({
              key: movie.key,
              name: movie.name,
              type: movie.type,
            })
          );
        });
        this.setState({ teaserTrailers: items });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            resizeMode={"cover"}
            style={styles.poster}
            source={{
              uri:
                "https://image.tmdb.org/t/p/w500/" +
                this.movieItemx.backdrop_path,
            }}
          />
          <View style={{ flex: 1, padding: 20 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 11,
              }}
            >
              <View style={{ flexWrap: "wrap", flexDirection: "column" }}>
                <Text style={styles.title}>{this.movieItemx.title}</Text>
                <Text>{this.movieItemx.release_date}</Text>
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
                <Text>{this.movieItemx.vote_average}</Text>
              </View>
            </View>

            <ChipGroup datas={this.movieItemx.genres} />

            <Text style={styles.header}>Overview</Text>
            <Text>{this.movieItemx.overview}</Text>
            <Text style={styles.header}>Teaser & Trailers</Text>
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
              {this.state.teaserTrailers.map((item) => {
                return <TrailerItem key={item.key} poster={this.movieItemx.backdrop_path} data={item} />;
              })} 
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
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
