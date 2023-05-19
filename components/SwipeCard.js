import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function SwipeCard({ property }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={property.photos[0]} />
      <View style={styles.bottomSection}>
        <Text style={styles.title}>{property.label}</Text>
        <View style={styles.infoSection}>
          <View style={styles.info}>
            <Text style={styles.infoText}>{property.surface}</Text>
            <Text style={styles.infoText}>m²</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>{property.nbrRoom}</Text>
            <Text style={styles.infoText}>room(s)</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>{property.price}</Text>
            <Text style={styles.infoText}>
              {property.isRental ? "€ /mo" : "€"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#252525",
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 16,
  },
  bottomSection: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 700,
  },
  infoSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  info: {
    marginTop: 16,
    alignContent: "center",
    textAlign: "center",
  },
  infoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
