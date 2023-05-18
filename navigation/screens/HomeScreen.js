import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import { testProperties } from "../../testProperties";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const properties = testProperties; /*[
  { id: 1, label: "Property 1" },
  { id: 2, label: "Property 2" },
  { id: 3, label: "Property 3" },
  // ... Ajoutez d'autres biens immobiliers ici
];
*/

export default function HomeScreen() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        pan.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > 120) {
          // Swipe à droite, afficher la carte suivante
          Animated.timing(pan, {
            toValue: { x: SCREEN_WIDTH, y: gesture.dy }, // Déplacer la carte hors de l'écran vers la droite
            duration: 180,
            useNativeDriver: false,
          }).start(() => {
            pan.setValue({ x: 0, y: 0 }); // Réinitialise la position de la carte
          });
        } else if (gesture.dx < -120) {
          // Swipe à gauche, afficher la carte suivante
          Animated.timing(pan, {
            toValue: { x: -SCREEN_WIDTH, y: gesture.dy }, // Déplacer la carte hors de l'écran vers la gauche
            duration: 180,
            useNativeDriver: false,
          }).start(() => {
            pan.setValue({ x: 0, y: 0 }); // Réinitialise la position de la carte
          });
        } else {
          // Réinitialiser la position de la carte si le mouvement n'est pas suffisant pour être considéré comme un swipe
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const animatedCardStyles = {
    transform: pan.getTranslateTransform(),
  };

  return (
    <View style={styles.screen}>
      <View style={styles.deck}>
        {properties
          .map((property, index) => {
            if (index === 0) {
              return (
                <Animated.View
                  key={property.id}
                  style={[styles.card, animatedCardStyles]}
                  {...panResponder.panHandlers}
                >
                  <Text>{property.label}</Text>
                </Animated.View>
              );
            }
            return (
              <Animated.View
                key={property.id}
                style={[styles.card]}
                {...panResponder.panHandlers}
              >
                <Text>{property.label}</Text>
              </Animated.View>
            );
          })
          .reverse()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deck: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    height: SCREEN_HEIGHT - 120,
    width: SCREEN_WIDTH > 509 ? 500 : SCREEN_WIDTH - 20,
  },
  card: {
    position: "absolute",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: "100%",
    width: "100%",
  },
});
