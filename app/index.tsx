import Title from "@/components/Title";
import { Alert, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { globalStyles, theme } from "@/components/styles";
import SuperButton from "@/components/SuperButton";
import TodoItem, { TodoItemModel } from "@/components/TodoItem";
import { useState } from "react";

export default function Index() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Array<TodoItemModel>>([]);

  const addTodo = () => {
    if (!newItem || newItem.trim() === "") {
      alert("Informe um texto válido");
      return;
    }

    setTodos((todos) => [
      ...todos,
      { id: Date.now(), text: newItem, completed: false },
    ]);
  };

  const updateTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
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
          iconRight={"plussquare"}
          title="Adicionar"
          onPress={addTodo}
        />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
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
