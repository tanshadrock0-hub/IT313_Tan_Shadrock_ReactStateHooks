import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import PracticeTracker from "./components/PracticeTracker";
import Stopwatch from "./components/Stopwatch";
import useStopwatch from "./hooks/useStopwatch";

export default function App() {
  // State owned by the parent component
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Custom hook manages elapsed time
  const seconds = useStopwatch(isRunning);

  // Event handlers
  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Lab Timer</Text>
        <Text style={styles.subtitle}>Practice Tracker</Text>
      </View>

      <View style={styles.card}>
        <PracticeTracker
          solved={solved}
          onSolve={handleSolve}
          onReset={handleReset}
        />
      </View>

      <View style={styles.card}>
        <Stopwatch seconds={seconds} isRunning={isRunning} />

        <View style={styles.timerButtons}>
          <View style={styles.buttonWrapper}>
            <Text
              style={[styles.actionButton, styles.startButton]}
              onPress={handleStart}
              accessibilityRole="button"
            >
              Start
            </Text>
          </View>

          <View style={styles.buttonWrapper}>
            <Text
              style={[styles.actionButton, styles.stopButton]}
              onPress={handleStop}
              accessibilityRole="button"
            >
              Stop
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.footer}>Keep practicing. Every problem counts!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FC",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1D3557",
  },
  subtitle: {
    fontSize: 17,
    color: "#64748B",
    marginTop: 5,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 22,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  timerButtons: {
    flexDirection: "row",
    marginTop: 20,
    gap: 12,
  },
  buttonWrapper: {
    flex: 1,
  },
  actionButton: {
    overflow: "hidden",
    textAlign: "center",
    paddingVertical: 12,
    borderRadius: 9,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "#16A34A",
  },
  stopButton: {
    backgroundColor: "#DC2626",
  },
  footer: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 4,
  },
});
