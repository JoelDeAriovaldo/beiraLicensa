import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../navigation/types";

type PaymentConfirmationScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "PaymentConfirmation"
>;

const PaymentConfirmation: React.FC = () => {
  const navigation = useNavigation<PaymentConfirmationScreenNavigationProp>();

  const handleConfirm = () => {
    // Implementar lógica de confirmação de pagamento
    console.log("Pagamento confirmado");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação de Pagamento</Text>
      <Text style={styles.message}>
        Seu pagamento foi processado com sucesso!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PaymentConfirmation;
