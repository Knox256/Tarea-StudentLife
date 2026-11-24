import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function InfoCard({ title, value, color = '#2563EB', children }) {
  return <View style={[styles.card, { borderLeftWidth: 5, borderLeftColor: color }]}>
    <Text style={local.title}>{title}</Text>
    {value !== undefined && <Text style={[local.value, { color }]}>{value}</Text>}
    {children}
  </View>;
}
const local = StyleSheet.create({ title: { fontSize: 16, fontWeight: '600', color: '#334155' }, value: { fontSize: 30, fontWeight: 'bold', marginTop: 6 } });

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', padding: 18, borderRadius: 10, marginBottom: 12 },
});

