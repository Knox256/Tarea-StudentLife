import { StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import InfoCard from '../components/InfoCard';

export default function HomeScreen() {
  const today = new Date();
  const next = nextClass(classes, today);
  return <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <Text style={styles.title}>Bienvenido a StudentLife</Text>
    <Text style={styles.subtitle}>Hola, {initialProfile.name}. Tu asistente académico.</Text>
    <InfoCard title="Tareas pendientes" value={pendingCount(initialTasks)} />
    <InfoCard title="Clases de hoy" value={classesToday(classes, today).length} color="#0D9488" />
    <InfoCard title="Tareas completadas" value={initialTasks.filter(t => t.completed).length} color="#15803D" />
    <Text style={styles.heading}>Próxima actividad académica</Text>
    <InfoCard title={next.subject} color={next.color}>
      <Text style={[styles.body, { marginTop: 8 }]}>{days[next.day]} · {next.time}</Text>
      <Text style={styles.body}>{next.classroom} · {next.teacher}</Text>
    </InfoCard>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  content: { padding: 20, paddingBottom: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#172B4D', marginBottom: 10 },
  subtitle: { fontSize: 15, color: '#596579', marginBottom: 18 },
  heading: { fontSize: 18, fontWeight: 'bold', color: '#172B4D', marginTop: 12, marginBottom: 12 },
  body: { color: '#334155', fontSize: 15, marginBottom: 4 },
});

const initialTasks = [
  { id: '1', title: 'Estudiar React Native', completed: false },
  { id: '2', title: 'Terminar la tarea', completed: false },
  { id: '3', title: 'Preparar la presentación', completed: true },
];

const initialProfile = {
  name: 'Alex Johnson', studentId: '2026001', career: 'Ciencias de la Computación',
  email: 'alex@student.edu', semester: '8', phone: '6140000000',
};

const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const classes = [
  { id: '1', subject: 'Desarrollo móvil', teacher: 'John Smith', time: '08:00 - 10:00', classroom: 'Laboratorio 1', day: 1, color: '#2563EB' },
  { id: '2', subject: 'Sistemas de bases de datos', teacher: 'Mary Johnson', time: '10:00 - 12:00', classroom: 'Aula 204', day: 1, color: '#0D9488' },
  { id: '3', subject: 'Ingeniería de software', teacher: 'David Brown', time: '12:00 - 14:00', classroom: 'Aula 105', day: 1, color: '#9333EA' },
  { id: '4', subject: 'Aprendizaje automático', teacher: 'Laura Miller', time: '09:00 - 11:00', classroom: 'Laboratorio 2', day: 3, color: '#C2410C' },
  { id: '5', subject: 'Redes de computadoras', teacher: 'James Wilson', time: '10:00 - 12:00', classroom: 'Aula 302', day: 5, color: '#BE185D' },
];

function pendingCount(tasks) { return tasks.filter(task => !task.completed).length; }

function classesToday(items, now = new Date()) { return items.filter(c => c.day === now.getDay()); }

function nextClass(items, now = new Date()) {
  const current = now.getDay() * 1440 + now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  const delta = c => { const [h,m] = c.time.slice(0,5).split(':').map(Number); return (c.day*1440+h*60+m-current+10080)%10080; };
  return [...items].sort((a,b) => delta(a)-delta(b))[0];
}
