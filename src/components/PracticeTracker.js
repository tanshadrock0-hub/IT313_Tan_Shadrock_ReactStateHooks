import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View>
      <Text style={styles.heading}>Practice Problems</Text>

      <Text style={styles.counter}>Solved: {solved}</Text>

      {solved >= 5 && <Text style={styles.success}>Great job!</Text>}

      <Pressable style={styles.solveButton} onPress={onSolve}>
        <Text style={styles.buttonText}>Solve +1</Text>
      </Pressable>

      <Pressable style={styles.resetButton} onPress={onReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3557",
    marginBottom: 15,
  },
  counter: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#2563EB",
  },
  success: {
    textAlign: "center",
    color: "#16A34A",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  solveButton: {
    backgroundColor: "#2563EB",
    padding: 13,
    borderRadius: 9,
    marginTop: 8,
  },
  resetButton: {
    backgroundColor: "#64748B",
    padding: 13,
    borderRadius: 9,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
