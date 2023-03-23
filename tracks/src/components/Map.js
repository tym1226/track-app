import React, { useContext } from "react";
import { StyleSheet, Text, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" stype={{ marginTop: 200 }} />;
  }

  /** dummy route to test polyline on map */
  //   let points = [];
  //   for (let i = 0; i < 15; i++) {
  //     if (i % 2 == 0) {
  //       points.push({
  //         latitude: 47.6062 + i * 0.001,
  //         longitude: -122.3321 + i * 0.001,
  //       });
  //     } else {
  //       points.push({
  //         latitude: 47.6062 - i * 0.002,
  //         longitude: -122.3321 + i * 0.002,
  //       });
  //     }
  //   }
  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // recenters the map. will snap out if trying to move the map on physical device
      //   region={{
      //     ...currentLocation.coords,
      //     latitudeDelta: 0.01,
      //     longitudeDelta: 0.01,
      //   }}
      style={styles.map}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
