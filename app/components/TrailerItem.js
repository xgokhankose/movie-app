import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
function TrailerItem(props) {
  const deviceWitdh = Dimensions.get("window").width;
  const posterWidth = (deviceWitdh - 50) / 2;
  const leftPosition = (posterWidth - 24)/2
  return (
    <View style={{ marginRight: 5 }}>
      <Image
        style={{
          position: "absolute",
          top: 38,
          left: leftPosition,
          zIndex: 1,
          width: 24,
          height: 24,
        }}
        source={require("../assets/play-button.png")}
      />
      <Image
        resizeMode={"cover"}
        style={{ width: posterWidth, height: 100, borderRadius:15, marginBottom:5 }}
        source={{ uri: "https://image.tmdb.org/t/p/w342" + props.poster }}
      />
      <Text style={{ flexWrap: "wrap", width: posterWidth }}>
        {props.data.name}
      </Text>
    </View>
  );
}

export default TrailerItem;
