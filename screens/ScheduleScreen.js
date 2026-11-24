import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import InfoCard from '../components/InfoCard';

function ClassCard({ item }) {
  return <InfoCard title={item.subject} color={item.color}>
    <Text style={[styles.body, { marginTop: 8 }]}>Profesor: {item.teacher}</Text>
    <Text style={styles.body}>Día: {days[item.day]}</Text>
    <Text style={styles.body}>Horario: {item.time}</Text>
    <Text style={styles.body}>Aula: {item.classroom}</Text>
  </InfoCard>;
}
export default function ScheduleScreen() {
  const today = new Date();
  const todayClasses = classesToday(classes, today);
  return <View style={styles.container}>
    <FlatList data={classes} keyExtractor={item => item.id} contentContainerStyle={styles.content}
      ListHeaderComponent={<View>
        <Text style={styles.title}>Mi horario</Text>
        <Text style={styles.heading}>Clases de hoy · {days[today.getDay()]}</Text>
        {todayClasses.length ? todayClasses.map(item => <ClassCard key={item.id} item={item} />) : <Text style={styles.subtitle}>No hay clases programadas para hoy.</Text>}
        <Text style={styles.heading}>Horario semanal</Text>
      </View>}
      renderItem={({ item }) => <ClassCard item={item} />} />
  </View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  content: { padding: 20, paddingBottom: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#172B4D', marginBottom: 10 },
  subtitle: { fontSize: 15, color: '#596579', marginBottom: 18 },
  heading: { fontSize: 18, fontWeight: 'bold', color: '#172B4D', marginTop: 12, marginBottom: 12 },
  body: { color: '#334155', fontSize: 15, marginBottom: 4 },
});

const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const classes = [
  { id: '1', subject: 'Desarrollo móvil', teacher: 'John Smith', time: '08:00 - 10:00', classroom: 'Laboratorio 1', day: 1, color: '#2563EB' },
  { id: '2', subject: 'Sistemas de bases de datos', teacher: 'Mary Johnson', time: '10:00 - 12:00', classroom: 'Aula 204', day: 1, color: '#0D9488' },
  { id: '3', subject: 'Ingeniería de software', teacher: 'David Brown', time: '12:00 - 14:00', classroom: 'Aula 105', day: 1, color: '#9333EA' },
  { id: '4', subject: 'Aprendizaje automático', teacher: 'Laura Miller', time: '09:00 - 11:00', classroom: 'Laboratorio 2', day: 3, color: '#C2410C' },
  { id: '5', subject: 'Redes de computadoras', teacher: 'James Wilson', time: '10:00 - 12:00', classroom: 'Aula 302', day: 5, color: '#BE185D' },
];

function classesToday(items, now = new Date()) { return items.filter(c => c.day === now.getDay()); }
