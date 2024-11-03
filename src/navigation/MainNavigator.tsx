import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import { MainStackParamList } from "./types";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { View, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        {/* Outras telas podem ser adicionadas aqui */}
      </Stack.Navigator>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainNavigator;
