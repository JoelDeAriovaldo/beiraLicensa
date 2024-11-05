import React from "react";
import { View, StyleSheet } from "react-native";

interface ScaffoldProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const Scaffold: React.FC<ScaffoldProps> = ({ header, footer, children }) => {
  return (
    <View style={styles.container}>
      {header}
      <View style={styles.content}>{children}</View>
      <View style={styles.footer}>{footer}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Scaffold;
