import { StyleSheet, Text, View } from "react-native";

export default function Stopwatch({ seconds, isRunning }) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Study Stopwatch</Text>

      <Text style={styles.time}>{formattedTime}</Text>

      <Text
        style={[styles.status, { color: isRunning ? "#16A34A" : "#64748B" }]}
      >
        {isRunning ? "Running…" : "Paused"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3557",
    marginBottom: 15,
  },
  time: {
    fontSize: 46,
    fontWeight: "bold",
    color: "#2563EB",
    fontVariant: ["tabular-nums"],
  },
  status: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 8,
  },
});
