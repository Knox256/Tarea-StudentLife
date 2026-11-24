import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function TaskItem({ task, onToggle, onDelete }) {
  return <View style={[styles.card, local.row]}>
    <TouchableOpacity style={local.task} onPress={onToggle} accessibilityRole="checkbox" accessibilityState={{ checked: task.completed }}>
      <Ionicons name={task.completed ? 'checkmark-circle' : 'ellipse-outline'} color={task.completed ? '#15803D' : '#2563EB'} size={24} />
      <Text style={[local.text, task.completed && local.completed]}>{task.title}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onDelete} accessibilityRole="button" accessibilityLabel={'Eliminar ' + task.title} style={{ padding: 8 }}>
      <Ionicons name="trash-outline" size={22} color="#B91C1C" />
    </TouchableOpacity>
  </View>;
}
const local = StyleSheet.create({ row: { flexDirection: 'row', alignItems: 'center' }, task: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }, text: { flex: 1, fontSize: 16, color: '#172B4D' }, completed: { textDecorationLine: 'line-through', color: 'gray' } });

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 18, borderRadius: 10, marginBottom: 12 },
});

