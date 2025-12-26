
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: { padding: 16, gap: 24 },
  screenTitle: { fontSize: 24, fontWeight: '600' },
  screenSubtitle: { fontSize: 14, color: '#555', marginBottom: 8 },
  block: { padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, gap: 8 },
  blockTitle: { fontSize: 16, fontWeight: '600' },
  input: {
    borderWidth: 1, borderColor: '#aaa', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 6,
    backgroundColor: '#fff',
  },
  error: { color: '#d33', fontSize: 12 },
  errorSmall: { color: '#d33', fontSize: 10, marginLeft: 4 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  removeBtn: { backgroundColor: '#eee', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  removeText: { color: '#333' },
  note: { fontSize: 12, color: '#333' },
  footerNote: { fontSize: 12, color: '#666', marginTop: 12 },
});

export const ExampleBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View style={styles.block}>
    <Text style={styles.blockTitle}>{title}</Text>
    {children}
  </View>
);