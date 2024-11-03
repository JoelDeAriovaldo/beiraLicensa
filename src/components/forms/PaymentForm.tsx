import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const PaymentForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSave = () => {
    // Implementar lógica de salvar método de pagamento
    console.log("Método de pagamento salvo:", { cardNumber, expiryDate, cvv });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Método de Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Validade (MM/AA)"
        value={expiryDate}
        onChangeText={setExpiryDate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
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
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
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

export default PaymentForm;
