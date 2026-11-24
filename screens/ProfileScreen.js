import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
const fields = [
  ['name', 'Nombre del estudiante', 'default'], ['studentId', 'Matrícula', 'default'],
  ['career', 'Carrera', 'default'], ['email', 'Correo electrónico', 'email-address'],
  ['semester', 'Semestre', 'numeric'], ['phone', 'Teléfono', 'phone-pad'],
];
export default function ProfileScreen() {
  const [profile, setProfile] = useState(initialProfile);
  const [editing, setEditing] = useState(false);
  return <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
    <Text style={styles.title}>Mi perfil</Text>
    <View style={styles.card}>
      {fields.map(([key, label, keyboard]) => <View key={key}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={[styles.input, editing && { borderWidth: 1, borderColor: '#2563EB' }]} value={profile[key]} editable={editing} keyboardType={keyboard} autoCapitalize={key === 'email' ? 'none' : 'sentences'} accessibilityLabel={label} onChangeText={value => setProfile(previous => ({ ...previous, [key]: value }))} />
      </View>)}
      <TouchableOpacity style={[styles.button, { marginTop: 25 }]} onPress={() => setEditing(previous => !previous)}><Text style={styles.buttonText}>{editing ? 'Guardar cambios' : 'Editar perfil'}</Text></TouchableOpacity>
    </View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  content: { padding: 20, paddingBottom: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#172B4D', marginBottom: 10 },
  card: { backgroundColor: 'white', padding: 18, borderRadius: 10, marginBottom: 12 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#334155', marginTop: 12, marginBottom: 5 },
  input: { backgroundColor: '#F1F5F9', padding: 12, borderRadius: 8, fontSize: 16, color: '#172B4D' },
  button: { backgroundColor: '#2563EB', padding: 14, borderRadius: 8, marginTop: 10, marginBottom: 10 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});

const initialProfile = {
  name: 'Alex Johnson', studentId: '2026001', career: 'Ciencias de la Computación',
  email: 'alex@student.edu', semester: '8', phone: '6140000000',
};
