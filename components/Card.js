import { View, Text } from "react-native";
import React from "react";
import styles from "../assets/styles/CardStyles";

const Card = (props) => {
  return (
    <View style={styles.card}>
        <Text style={styles.index}># {props.id}</Text>
        <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

export default Card;