import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type VehicleDetailsScreenRouteProp = RouteProp<
  MainStackParamList,
  "VehicleDetails"
>;
type VehicleDetailsScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "VehicleDetails"
>;

const VehicleDetails: React.FC = () => {
  const route = useRoute<VehicleDetailsScreenRouteProp>();
  const navigation = useNavigation<VehicleDetailsScreenNavigationProp>();
  const { id } = route.params;

  // Mock data for demonstration purposes
  const vehicleDetails = {
    id,
    vehicleName: "Toyota Corolla",
    plateNumber: "ABC 123",
    registrationDate: "2024-03-01",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Veículo</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Nome do Veículo:</Text>
        <Text style={styles.value}>{vehicleDetails.vehicleName}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Número da Placa:</Text>
        <Text style={styles.value}>{vehicleDetails.plateNumber}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Data de Registro:</Text>
        <Text style={styles.value}>{vehicleDetails.registrationDate}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
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

export default VehicleDetails;
