import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Films from "./screens/Films";
import Todo from "./screens/Todo";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.navigatar}>
    <Tab.Navigator 
      screenOptions={{
        tabBarAllowFontScaling: true,
        tabBarLabelStyle: {
          fontSize: 20,
          marginTop: -20,
          fontWeight: "bold",
        },
        tabBarIcon:()=>{
          return null
        }
      }}
    >
      <Tab.Screen name="Films" component={Films} />
      <Tab.Screen name="Todo" component={Todo} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app:{
    flex:1,
  },
  navigatar: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#181818",
    fontSize: 20,
    fontWeight: "bold",
  },
});
