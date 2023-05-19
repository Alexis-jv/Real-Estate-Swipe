import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import SwipeCard from "../../components/SwipeCard";
import { testProperties } from "../../testProperties";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen() {
  const pan = useRef(new Animated.ValueXY()).current;

  //This has to be a list of all properties ids we will stack on the deck
  //and fetch datas from the database when we put the id into the rendered list state
  const properties = useRef(JSON.parse(JSON.stringify(testProperties)));
  const liked = useRef([]);
  const passed = useRef([]);

  const [rendered, setRendered] = useState(properties.current.slice(0, 2));

  const swipeLeftHandler = () => {
    passed.current.push(properties.current[0].id);
    properties.current = properties.current.slice(1);
    setRendered(properties.current.slice(0, 2));
  };

  const swipeRightHandler = () => {
    liked.current.push(properties.current[0].id);
    properties.current = properties.current.slice(1);
    setRendered(properties.current.slice(0, 2));
  };
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
            swipeRightHandler();
            pan.setValue({ x: 0, y: 0 }); // Réinitialise la position de la carte
          });
        } else if (gesture.dx < -120) {
          // Swipe à gauche, afficher la carte suivante
          Animated.timing(pan, {
            toValue: { x: -SCREEN_WIDTH, y: gesture.dy }, // Déplacer la carte hors de l'écran vers la gauche
            duration: 180,
            useNativeDriver: false,
          }).start(() => {
            swipeLeftHandler();
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
      {/*<Text>
        {JSON.stringify(passed.current) + JSON.stringify(liked.current)}
    </Text>*/}
      <View style={styles.deck}>
        <Text>
          {
            "There is no longer properties to show you... \n Come later to see new ones!"
          }
        </Text>
        {rendered
          .map((property, index) => {
            if (index === 0) {
              return (
                <Animated.View
                  key={property.id}
                  style={[styles.card, styles.currentCard, animatedCardStyles]}
                  {...panResponder.panHandlers}
                >
                  <SwipeCard property={property} />
                </Animated.View>
              );
            }
            return (
              <Animated.View
                key={property.id}
                style={[styles.card]}
                {...panResponder.panHandlers}
              >
                <SwipeCard property={property} />
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
    textAlign: "center",
    backgroundColor: "lightgray",
    borderRadius: 16,
    height: SCREEN_HEIGHT - 120,
    width: SCREEN_WIDTH > 509 ? 500 : SCREEN_WIDTH - 20,
  },
  card: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    borderRadius: 16,
  },
  currentCard: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 10 },
  },
});
