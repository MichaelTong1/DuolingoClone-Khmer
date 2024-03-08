import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';



export default function App() {
  return (
    <View style={styles.view}>
      <Text>Example of a Duolingo button:</Text>
      <Pressable
        style={styles.button}
        onPress={() => console.log('Simple Button pressed')}
      >
        <Text style={styles.text}>EXAMPLE BUTTON</Text>
      </Pressable>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: '#58cc02',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

