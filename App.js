import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>hello world </Text>
      <TouchableOpacity onPress={() => console.log("image pressed")}>
        <Image source={{width: 200,height: 300,uri: "https://picsum.photos/200/300"}}/>
        <Button color='orange' title='click me' onPress={() => alert('button clicked')}></Button>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
