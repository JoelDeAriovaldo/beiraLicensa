import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const VehicleForm: React.FC = () => {
  const [vehicleName, setVehicleName] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");

  const handleSave = () => {
    // Implementar lógica de salvar informações do veículo
    console.log("Informações do veículo salvas:", {
      vehicleName,
      plateNumber,
      registrationDate,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Veículo</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Veículo"
        value={vehicleName}
        onChangeText={setVehicleName}
      />
      <TextInput
        style={styles.input}
        placeholder="Número da Placa"
        value={plateNumber}
        onChangeText={setPlateNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Registro (DD/MM/AAAA)"
        value={registrationDate}
        onChangeText={setRegistrationDate}
        keyboardType="numeric"
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

export default VehicleForm;
