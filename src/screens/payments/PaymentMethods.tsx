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

type PaymentMethodsScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "PaymentMethods"
>;

const PaymentMethods: React.FC = () => {
  const navigation = useNavigation<PaymentMethodsScreenNavigationProp>();

  // Mock data for demonstration purposes
  const paymentMethods = [
    {
      id: "1",
      cardNumber: "**** **** **** 1234",
      expiryDate: "12/24",
    },
    {
      id: "2",
      cardNumber: "**** **** **** 5678",
      expiryDate: "11/23",
    },
  ];

  const renderItem = ({ item }: { item: (typeof paymentMethods)[0] }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.cardNumber}>{item.cardNumber}</Text>
      <Text style={styles.expiryDate}>{item.expiryDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Métodos de Pagamento</Text>
      <FlatList
        data={paymentMethods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PaymentForm")}
      >
        <Text style={styles.buttonText}>Adicionar Novo Método</Text>
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
  itemContainer: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    marginBottom: 15,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  expiryDate: {
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

export default PaymentMethods;
