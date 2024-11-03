import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../../components/common/Card"; // Ajuste a importação
import { MainStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Car, CreditCard, History, User } from "lucide-react";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "Home"
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const quickActions = [
    {
      title: "Nova Licença",
      icon: <Car className="w-6 h-6 text-blue-600" />,
      screen: "VehicleList" as keyof MainStackParamList,
      description: "Registre uma nova licença para seu veículo",
    },
    {
      title: "Métodos de Pagamento",
      icon: <CreditCard className="w-6 h-6 text-green-600" />,
      screen: "PaymentMethods" as keyof MainStackParamList,
      description: "Gerencie suas formas de pagamento",
    },
    {
      title: "Histórico",
      icon: <History className="w-6 h-6 text-purple-600" />,
      screen: "LicenseHistory" as keyof MainStackParamList,
      description: "Veja suas licenças anteriores",
    },
    {
      title: "Perfil",
      icon: <User className="w-6 h-6 text-gray-600" />,
      screen: "Profile" as keyof MainStackParamList,
      description: "Atualize suas informações",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Bem-vindo ao Beira Licenses</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>
              Gerencie suas licenças de veículos de forma rápida e segura
            </Text>
          </View>
        </Card>

        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          <View style={styles.quickActions}>
            {quickActions.map((action, index) => (
              <TouchableOpacity key={index} style={styles.quickAction}>
                <Card style={styles.quickActionCard}>
                  <View style={styles.quickActionContent}>
                    {action.icon}
                    <Text style={styles.quickActionTitle}>{action.title}</Text>
                    <Text style={styles.quickActionDescription}>
                      {action.description}
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              Licenças Próximas do Vencimento
            </Text>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.warningBox}>
              <Text style={styles.warningText}>
                Nenhuma licença próxima do vencimento
              </Text>
            </View>
          </View>
        </Card>

        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              Métodos de Pagamento Disponíveis
            </Text>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.paymentMethods}>
              <View style={styles.paymentMethod}>
                <Text style={styles.paymentMethodText}>M-Pesa</Text>
              </View>
              <View style={styles.paymentMethod}>
                <Text style={styles.paymentMethodText}>E-Mola</Text>
              </View>
              <View style={styles.paymentMethod}>
                <Text style={styles.paymentMethodText}>MKesh</Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardHeader: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    marginBottom: 8,
  },
  cardText: {
    color: "#666",
  },
  quickActionsContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickAction: {
    width: "48%",
    marginBottom: 16,
  },
  quickActionCard: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  quickActionContent: {
    alignItems: "center",
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  quickActionDescription: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 4,
  },
  warningBox: {
    backgroundColor: "#FFF3CD",
    padding: 16,
    borderRadius: 8,
  },
  warningText: {
    color: "#856404",
  },
  paymentMethods: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentMethod: {
    alignItems: "center",
  },
  paymentMethodText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default HomeScreen;
