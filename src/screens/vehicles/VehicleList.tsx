import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../navigation/types";

type VehicleListScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "VehicleList"
>;

const VehicleList: React.FC = () => {
  const navigation = useNavigation<VehicleListScreenNavigationProp>();

  // Mock data for demonstration purposes
  const vehicles = [
    {
      id: "1",
      vehicleName: "Toyota Corolla",
      plateNumber: "ABC 123",
    },
    {
      id: "2",
      vehicleName: "Honda Civic",
      plateNumber: "XYZ 789",
    },
  ];

  const renderItem = ({ item }: { item: (typeof vehicles)[0] }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("VehicleDetails", { id: item.id })}
    >
      <Text style={styles.vehicleName}>{item.vehicleName}</Text>
      <Text style={styles.plateNumber}>{item.plateNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Veículos</Text>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VehicleForm")} // Navega para VehicleForm
      >
        <Text style={styles.buttonText}>Adicionar Novo Veículo</Text>
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
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    marginBottom: 15,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  plateNumber: {
    fontSize: 14,
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

export default VehicleList;
