import React from "react";
import { View, SafeAreaView, Text ,StyleSheet} from "react-native";
import Constants from "expo-constants";

function MovieDetail({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.item.title}</Text>
      <Text>{route.params.item.popularity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Constants.statusBarHeight,
    }
})

export default MovieDetail;
