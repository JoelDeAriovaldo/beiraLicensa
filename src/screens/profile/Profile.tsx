import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../navigation/types";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "Profile"
>;

const Profile: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  // Mock data for demonstration purposes
  const userProfile = {
    name: "Larcen Oliveira ",
    email: "LarcenOliveira.com",
    phone: "836197987",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{userProfile.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>{userProfile.email}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.value}>{userProfile.phone}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#666",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
