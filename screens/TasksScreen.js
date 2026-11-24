import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';

export default function TasksScreen() {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState(initialTasks);
  function handleAdd() {
    if (!taskName.trim()) return;
    const id = Date.now().toString() + Math.random().toString(36).slice(2, 7);
    setTasks(previous => addTask(previous, taskName, id));
    setTaskName('');
  }
  return <View style={[styles.container, styles.content]}>
    <Text style={styles.title}>Mis tareas</Text>
    <Text style={styles.subtitle}>Tareas pendientes: {pendingCount(tasks)}</Text>
    <TextInput style={[styles.input, { backgroundColor: 'white' }]} placeholder="Escribe una tarea nueva" value={taskName} onChangeText={setTaskName} onSubmitEditing={handleAdd} />
    <TouchableOpacity style={styles.button} onPress={handleAdd}><Text style={styles.buttonText}>Agregar tarea</Text></TouchableOpacity>
    <FlatList data={tasks} keyExtractor={item => item.id} keyboardShouldPersistTaps="handled" renderItem={({ item }) => (
      <TaskItem task={item} onToggle={() => setTasks(previous => toggleTask(previous, item.id))} onDelete={() => setTasks(previous => deleteTask(previous, item.id))} />
    )} ListEmptyComponent={<Text style={styles.subtitle}>No hay tareas registradas.</Text>} />
  </View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  content: { padding: 20, paddingBottom: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#172B4D', marginBottom: 10 },
  subtitle: { fontSize: 15, color: '#596579', marginBottom: 18 },
  input: { backgroundColor: '#F1F5F9', padding: 12, borderRadius: 8, fontSize: 16, color: '#172B4D' },
  button: { backgroundColor: '#2563EB', padding: 14, borderRadius: 8, marginTop: 10, marginBottom: 10 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});

const initialTasks = [
  { id: '1', title: 'Estudiar React Native', completed: false },
  { id: '2', title: 'Terminar la tarea', completed: false },
  { id: '3', title: 'Preparar la presentación', completed: true },
];

function addTask(tasks, title, id = Date.now().toString()) {
  if (!title.trim()) return tasks;
  return [...tasks, { id, title: title.trim(), completed: false }];
}

function toggleTask(tasks, id) {
  return tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
}

function deleteTask(tasks, id) { return tasks.filter(task => task.id !== id); }

function pendingCount(tasks) { return tasks.filter(task => !task.completed).length; }
