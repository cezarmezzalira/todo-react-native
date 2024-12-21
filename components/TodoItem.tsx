import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

export interface TodoItemModel {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: TodoItemModel;
  onPress: (id: number) => void;
}

const TodoItem = ({ todo, onPress }: TodoItemProps) => {
  const { id, text, completed } = todo;

  const handleUpdate = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleUpdate}>
      <Text style={styles.text}>{text}</Text>
      <AntDesign
        name={completed ? "checksquare" : "checksquareo"}
        size={24}
        color="white"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    backgroundColor: theme.placeholderTextColor,
    width: "100%",
    height: "auto",
    marginBottom: 8,
    borderRadius: 8,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    // paddingLeft: 20,
    // paddingRight: 20,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    maxWidth: "90%",
    height: "auto",
  },
});

export default TodoItem;
