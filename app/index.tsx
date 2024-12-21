import Title from "@/components/Title";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles, theme } from "@/components/styles";
import SuperButton from "@/components/SuperButton";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";

export default function Index() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Array<string>>([]);

  const addTodo = () => {
    setTodos([...todos, newItem]);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.container}>
        <Title name="Todo" />
        <TextInput
          value={newItem}
          onChangeText={setNewItem}
          style={styles.input}
          placeholderTextColor={theme.placeholderTextColor}
          placeholder="Digite a tarefa"
        />
        <SuperButton
          iconLeft={"plussquare"}
          title="Adicionar"
          onPress={addTodo}
        />
        {todos.map((todo, index) => (
          <TodoItem key={index} todoText={todo} />
        ))}
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    padding: 8,
    alignItems: "center",
  },
  input: {
    color: theme.tint,
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 16,
    paddingHorizontal: 8,
  },
});
