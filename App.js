import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import RandomFoxBlock from './components/RandomFoxBlock';

/*

1. Image that is centered, and that displays random images onPress

2. The button to change the state of the app onPress

*/

function getFoxID(imageUri) {
  var imageUriSplitted = imageUri.split("/");
  var foxId = imageUriSplitted[imageUriSplitted.length - 1];
  return "fox " + foxId;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [foxImage, setFoxImage] = useState("");
  const [foxID, setFoxID] = useState("");

  const fetchApi = async () => {
    const response = await fetch('https://randomfox.ca/floof/');
    const data = await response.json();
    setFoxImage(data.image);
    setFoxID(getFoxID(data.image));
  };

  function ButtonIsPressed() {
    fetchApi();
    setCount(count + 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <RandomFoxBlock text={foxID} foxImage={foxImage} />
      <Text style={{ fontSize: 20, padding: 20 }}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={ButtonIsPressed}>
        <Text style={{ fontSize: 25 }}>Press me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    marginTop: 20,
    width: 180,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 12,
  },
});
