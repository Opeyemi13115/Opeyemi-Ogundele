import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function IntroScreen() {
  const [dots, setDots] = useState("");
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    // Simulate loading steps
    const steps = [
      "Initializing...",
      "Checking system...",
      "Loading resources...",
      "Preparing interface...",
      "Almost ready...",
    ];

    let stepIndex = 0;

    const stepInterval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setStatus(steps[stepIndex]);
      } else {
        clearInterval(stepInterval);
      }
    }, 1500);

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => {
      clearInterval(stepInterval);
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* App Name */}
      <Text style={styles.title}>OPEYEMI OGUNDELE</Text>
      <Text style={styles.title}>GIT Assignment</Text>

      {/* Version Info */}
      <Text style={styles.version}>RUN/CYB/22/13115</Text>

      {/* Loader */}
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4f46e5" />
      </View>

      {/* Status Message */}
      <Text style={styles.status}>{status}{dots}</Text>

      {/* Footer Info */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>My first expo project</Text>
        <Text style={styles.footerText}>© 2026 My Company</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0208",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#20a44c",
  },
  version: {
    fontSize: 12,
    color: "#5d09e3",
    marginBottom: 30,
  },
  loaderContainer: {
    marginVertical: 20,
  },
  status: {
    fontSize: 16,
    color: "#38b91e",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#eacb02",
  },
});