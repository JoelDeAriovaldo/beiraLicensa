import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.title}>Beira Licenses</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <MaterialCommunityIcons name="account" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 15,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
