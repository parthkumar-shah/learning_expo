
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, ScrollView, Text, TextInput } from 'react-native';
import { ExampleBlock, styles } from './common';

const RHFBasicExample = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({ defaultValues: { firstName: '', age: '' } });
  const onSubmit = (data: any) => alert(JSON.stringify(data, null, 2));
  return (
    <ExampleBlock title="2. Basic useForm + Controller">
      <Controller
        control={control}
        name="firstName"
        rules={{ required: 'First name required', minLength: { value: 2, message: 'Min length is 2' } }}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput style={styles.input} placeholder="First Name" value={value} onBlur={onBlur} onChangeText={onChange} />
        )}
      />
      {errors.firstName && <Text style={styles.error}>{errors.firstName.message}</Text>}
      <Controller
        control={control}
        name="age"
        rules={{
          required: 'Age required',
          validate: v => (!isNaN(Number(v)) ? true : 'Age must be numeric'),
          min: { value: 18, message: 'Age must be at least 18' },
          max: { value: 99, message: 'Age must be less than 100' }
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput style={styles.input} placeholder="Age" value={value} onChangeText={onChange} />
        )}
      />
      {errors.age && <Text style={styles.error}>{errors.age.message}</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ExampleBlock>
  );
};

export default function BasicScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>Basic RHF Example</Text>
      <RHFBasicExample />
    </ScrollView>
  );
}