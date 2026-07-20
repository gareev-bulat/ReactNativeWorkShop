import { View, Text, Image, StyleSheet } from "react-native";


const RandomFoxBlock = ({text, foxImage}) => {
  return (
    <View>
      <Image style={styles.image1} source={{uri: foxImage}} />
      <Text style={styles.text}>{text}</Text>
    </View>    
  );
}


const styles = StyleSheet.create({

  text: {
    fontSize: 30,
    alignSelf: 'center',
  },

  image1: {
    width: 200,
    height: 200,
    margin: 50
  }

})


export default RandomFoxBlock;

