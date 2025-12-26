
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, ScrollView, Text, TextInput } from 'react-native';
import { z } from 'zod';
import { ExampleBlock, styles } from './common';

const schema = z.object({
  email: z.email('Invalid email'),
  count: z
    .number()
    .int('Must be an integer')
    .min(1, 'Min 1')
    .max(10, 'Max 10'),
});


type SchemaData = z.infer<typeof schema>;

const SchemaValidationExample = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      count: 1,
    },
  });
  
  return (
    <ExampleBlock title="4. Schema Validation (Zod)">
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextInput style={styles.input} placeholder="Email" value={field.value} onChangeText={field.onChange} />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      <Controller
        control={control}
        name="count"
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Count (1-10)"
            keyboardType="numeric"
            value={String(field.value ?? '')}
            onChangeText={(text) =>
              field.onChange(text === '' ? undefined : Number(text))
            }
          />
        )}
      />
      {errors.count && <Text style={styles.error}>{errors.count.message}</Text>}
      <Button title="Submit" onPress={handleSubmit(d => alert(JSON.stringify(d)))} />
    </ExampleBlock>
  );
};

export default function SchemaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>Zod Schema Example</Text>
      <SchemaValidationExample />
    </ScrollView>
  );
}