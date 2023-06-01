import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image 
        source={require('./assets/logo.png')}
        style={styles.logo}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    height: 667,
    width:375
  },
  logo: {
    top: 40,
    height:80,
    width:80,
    position: 'absolute'
  }
});
