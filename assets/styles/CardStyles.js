import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 30,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  index: {
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'semibold',
    color: "#3e3d3dff",
  },
  price: {
    fontSize: 14,
    color: "#585858ff",
  },
});

export default styles;