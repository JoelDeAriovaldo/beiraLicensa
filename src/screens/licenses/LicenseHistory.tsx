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

type LicenseHistoryScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "LicenseHistory"
>;

const LicenseHistory: React.FC = () => {
  const navigation = useNavigation<LicenseHistoryScreenNavigationProp>();

  const licenseHistory = [
    {
      id: "1",
      vehicleName: "Toyota Corolla",
      plateNumber: "ABC 123",
      status: "Expirado",
      expiryDate: "2023-03-01",
    },
    {
      id: "2",
      vehicleName: "Honda Civic",
      plateNumber: "XYZ 789",
      status: "Expirado",
      expiryDate: "2022-02-15",
    },
  ];

  const renderItem = ({ item }: { item: (typeof licenseHistory)[0] }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("VehicleDetails", { id: item.id })}
    >
      <Text style={styles.vehicleName}>{item.vehicleName}</Text>
      <Text style={styles.plateNumber}>{item.plateNumber}</Text>
      <Text style={styles.status}>{item.status}</Text>
      <Text style={styles.expiryDate}>{item.expiryDate}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Licenças</Text>
      <FlatList
        data={licenseHistory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  status: {
    fontSize: 14,
    color: "#FF9800",
  },
  expiryDate: {
    fontSize: 14,
    color: "#999",
  },
});

export default LicenseHistory;
