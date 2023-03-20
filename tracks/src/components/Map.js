import React from "react";
import { StyleSheet, Text } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 15; i++) {
    if (i % 2 == 0) {
      points.push({
        latitude: 47.6062 + i * 0.001,
        longitude: -122.3321 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 47.6062 - i * 0.002,
        longitude: -122.3321 + i * 0.002,
      });
    }
  }
  return (
    <MapView
      initialRegion={{
        latitude: 47.6062,
        longitude: -122.3321,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
