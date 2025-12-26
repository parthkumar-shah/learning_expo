import { Link } from 'expo-router';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: { padding: 16, gap: 24 },
  screenTitle: { fontSize: 24, fontWeight: '600' },
  screenSubtitle: { fontSize: 14, color: '#555', marginBottom: 8 },
  footerNote: { fontSize: 12, color: '#666', marginTop: 12 },
});

export default function RHFExamplesHub() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>React Hook Form Examples Hub</Text>
      <Text style={styles.screenSubtitle}>Open each example separately for clarity.</Text>
      <View style={{ gap: 12 }}>
        <Link href="/rhf-examples/manual" asChild><Button title="1. Manual Form" /></Link>
        <Link href="/rhf-examples/basic" asChild><Button title="2. Basic useForm + Controller" /></Link>
        <Link href="/rhf-examples/validation" asChild><Button title="3. Validation Rules" /></Link>
        <Link href="/rhf-examples/schema" asChild><Button title="4. Zod Schema" /></Link>
        <Link href="/rhf-examples/field-array" asChild><Button title="5. Field Array" /></Link>
        <Link href="/rhf-examples/watch-reset" asChild><Button title="6. watch / reset / setValue" /></Link>
        <Link href="/rhf-examples/form-provider" asChild><Button title="7. FormProvider Context" /></Link>
        <Link href="/rhf-examples/FinalExample" asChild><Button title="8. Full Example" /></Link>
      </View>
      <Text style={styles.footerNote}>
        Navigate and compare patterns individually for teaching or slides.
      </Text>
    </ScrollView>
  );
}