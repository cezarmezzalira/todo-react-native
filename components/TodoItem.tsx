import { StyleSheet, Text, View } from "react-native";
import { theme } from "./styles";

interface TodoItemProps {
  todoText: string;
}

const TodoItem = ({ todoText }: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todoText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.placeholderTextColor,
    width: "100%",
    height: 50,
    marginBottom: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

export default TodoItem;
