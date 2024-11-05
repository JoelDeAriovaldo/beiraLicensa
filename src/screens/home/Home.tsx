import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../navigation/types";
import { Car, CreditCard, History, User } from "lucide-react-native";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "Home"
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [paymentHistory, setPaymentHistory] = useState([
    { date: "2024-10-01", amount: "1000" },
    { date: "2024-09-15", amount: "500" },
    { date: "2024-08-30", amount: "750" },
  ]);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      const history = await AsyncStorage.getItem("paymentHistory");
      if (history) {
        setPaymentHistory(JSON.parse(history));
      }
    };
    fetchPaymentHistory();
  }, []);

  const quickActions = [
    {
      title: "Nova Licença",
      icon: <Car color="#007AFF" size={22} />,
      screen: "VehicleForm" as keyof MainStackParamList,
      description: "Registre uma nova licença para seu veículo",
    },
    {
      title: "Métodos de Pagamento",
      icon: <CreditCard color="#007AFF" size={22} />,
      screen: "PaymentMethods" as keyof MainStackParamList,
      description: "Gerencie suas formas de pagamento",
    },
    {
      title: "Histórico",
      icon: <History color="#007AFF" size={22} />,
      screen: "LicenseHistory" as keyof MainStackParamList,
      description: "Veja suas licenças anteriores",
    },
    {
      title: "Perfil",
      icon: <User color="#007AFF" size={22} />,
      screen: "Profile" as keyof MainStackParamList,
      description: "Atualize suas informações",
    },
  ];

  const renderQuickAction = ({ item }: { item: (typeof quickActions)[0] }) => (
    <TouchableOpacity
      style={styles.quickAction}
      onPress={() => navigation.navigate(item.screen)}
    >
      <View style={styles.quickActionCard}>
        <View style={styles.quickActionContent}>
          {item.icon}
          <Text style={styles.quickActionTitle}>{item.title}</Text>
          <Text style={styles.quickActionDescription}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Beira Licenses</Text>
      <FlatList
        data={quickActions}
        renderItem={renderQuickAction}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.quickActionsContainer}
      />
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Licenças Próximas do Vencimento</Text>
        <View style={styles.cardContent}>
          <View style={styles.warningBox}>
            <Text style={styles.warningText}>
              Nenhuma licença próxima do vencimento
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Histórico de Pagamentos</Text>
        <View style={styles.cardContent}>
          {paymentHistory.length > 0 ? (
            paymentHistory.map((payment, index) => (
              <View key={index} style={styles.paymentHistoryItem}>
                <Text style={styles.paymentHistoryText}>
                  {payment.date} - {payment.amount} MZN
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.noPaymentHistoryText}>
              Nenhum pagamento registrado
            </Text>
          )}
        </View>
      </View>
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
  quickActionsContainer: {
    marginBottom: 20,
  },
  quickAction: {
    marginBottom: 16,
  },
  quickActionCard: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  quickActionContent: {
    alignItems: "center",
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  quickActionDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 4,
  },
  card: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardContent: {
    marginBottom: 8,
  },
  warningBox: {
    backgroundColor: "#FFF3CD",
    padding: 16,
    borderRadius: 8,
  },
  warningText: {
    color: "#856404",
  },
  paymentHistoryItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  paymentHistoryText: {
    color: "#666",
  },
  noPaymentHistoryText: {
    color: "#666",
    textAlign: "center",
  },
});

export default HomeScreen;
