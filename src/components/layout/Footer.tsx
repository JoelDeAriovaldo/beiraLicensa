import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Footer: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <MaterialCommunityIcons name="home" size={24} color="#007AFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("VehicleList")}>
        <MaterialCommunityIcons name="car" size={24} color="#007AFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LicenseHistory")}>
        <MaterialCommunityIcons name="history" size={24} color="#007AFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <MaterialCommunityIcons name="account" size={24} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
});

export default Footer;
