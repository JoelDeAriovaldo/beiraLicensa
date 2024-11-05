import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Home, Car, History, User } from "lucide-react-native";

const Footer: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.footerButton}
      >
        <Home color="#007AFF" size={22} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("VehicleList")}
        style={styles.footerButton}
      >
        <Car color="#007AFF" size={22} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LicenseHistory")}
        style={styles.footerButton}
      >
        <History color="#007AFF" size={22} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.footerButton}
      >
        <User color="#007AFF" size={22} />
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
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  footerButton: {
    padding: 8,
  },
});

export default Footer;
