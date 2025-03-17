import React from 'react'
import { View ,TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function TodoItem({id,text}) {
  return (
    <TouchableOpacity >
        <Text style={styles.container}>
            {id} . {text}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        backgroundColor: "#ccc",
    }
})
