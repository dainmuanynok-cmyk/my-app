import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './assets/styles/AppStyles'
import Header from './components/Header'
import Card from './components/Card'
import Info from './data/headerInfo';
import teams from './data/teamFootball';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header 
      title={Info.title}
      subtitle={Info.subtitle}
      createBy={Info.createBy}
      />
      <View style={styles.content}>
        {teams.map((t) => (
          <Card 
          key={t.id}
          id={t.id}
          name={t.name}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default App