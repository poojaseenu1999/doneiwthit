import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import SignInScreen from "./assets/src/screens/SignInScreen";
import Navigation from "./assets/src/navigation";




export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'none',
  },
});
