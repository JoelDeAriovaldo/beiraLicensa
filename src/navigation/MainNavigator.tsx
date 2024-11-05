import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import VehicleList from "../screens/vehicles/VehicleList";
import VehicleDetails from "../screens/vehicles/VehicleDetails";
import VehicleForm from "../components/forms/VehicleForm"; // Importar VehicleForm
import LicenseHistory from "../screens/licenses/LicenseHistory";
import Profile from "../screens/profile/Profile";
import { MainStackParamList } from "./types";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Scaffold from "../components/layout/Scaffold";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Scaffold header={<Header />} footer={<Footer />}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VehicleList" component={VehicleList} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
        <Stack.Screen name="VehicleForm" component={VehicleForm} />
        <Stack.Screen name="LicenseHistory" component={LicenseHistory} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </Scaffold>
  );
};

export default MainNavigator;
