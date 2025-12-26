
import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Button, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { ExampleBlock, styles } from './common';

const FieldArrayExample = () => {
  const { control, handleSubmit } = useForm({ defaultValues: { tasks: [{ title: '' }] } });
  const { fields, append, remove } = useFieldArray({ control, name: 'tasks' });
  return (
    <ExampleBlock title="5. useFieldArray (Dynamic Fields)">
      {fields.map((f, idx) => (
        <Controller
          key={f.id}
          control={control}
          name={`tasks.${idx}.title` as const}
          rules={{ required: 'Title required' }}
          render={({ field, fieldState }) => (
            <View style={styles.row}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder={`Task ${idx + 1}`}
                value={field.value}
                onChangeText={field.onChange}
              />
              <Pressable style={styles.removeBtn} onPress={() => remove(idx)}>
                <Text style={styles.removeText}>X</Text>
              </Pressable>
              {fieldState.error && <Text style={styles.errorSmall}>{fieldState.error.message}</Text>}
            </View>
          )}
        />
      ))}
      <View style={styles.row}>
        <Button title="Add Task" onPress={() => append({ title: '' })} />
        <Button title="Submit" onPress={handleSubmit(d => alert(JSON.stringify(d)))} />
      </View>
    </ExampleBlock>
  );
};

export default function FieldArrayScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>Field Array Example</Text>
      <FieldArrayExample />
    </ScrollView>
  );
}