
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, ScrollView, Text, TextInput } from 'react-native';
import { ExampleBlock, styles } from './common';

const ValidationExample = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({ defaultValues: { username: '', password: '' } });
  return (
    <ExampleBlock title="3. Validation (required, pattern, custom)">
      <Controller
        control={control}
        name="username"
        rules={{
          required: 'Username required',
          pattern: { value: /^[a-zA-Z0-9_]+$/, message: 'Only alphanumerics + underscore' },
        }}
        render={({ field }) => (
          <TextInput style={styles.input} placeholder="Username" value={field.value} onChangeText={field.onChange} />
        )}
      />
      {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password required',
          minLength: { value: 6, message: 'Min 6 chars' },
          validate: v => /[A-Z]/.test(v) || 'Need an uppercase letter',
        }}
        render={({ field }) => (
          <TextInput style={styles.input} placeholder="Password" secureTextEntry value={field.value} onChangeText={field.onChange} />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
      <Button title="Submit" onPress={handleSubmit(d => alert(JSON.stringify(d)))} />
    </ExampleBlock>
  );
};

export default function ValidationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>Validation Example</Text>
      <ValidationExample />
    </ScrollView>
  );
}