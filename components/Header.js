import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/styles/HeaderStyles'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <Text style={styles.headerSubtitle}>{props.subtitle}</Text>
      <Text style={styles.headerCreateBy}>Create By : {props.createBy}</Text>
    </View>
  )
}

export default Header