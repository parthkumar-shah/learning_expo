
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { ExampleBlock, styles } from './common';

const WatchResetExample = () => {
  const { control, handleSubmit, watch, reset, setValue } = useForm({ defaultValues: { search: '', flag: false } });
  const live = watch('search');
  return (
    <ExampleBlock title="6. watch / reset / setValue">
      <Controller
        control={control}
        name="search"
        render={({ field }) => (
          <TextInput style={styles.input} placeholder="Type to watch" value={field.value} onChangeText={field.onChange} />
        )}
      />
      <Text style={styles.note}>Live watch value: {live}</Text>
      <View style={styles.row}>
        <Button title="Set Preset" onPress={() => setValue('search', 'Preset Value')} />
        <Button title="Reset" onPress={() => reset()} />
      </View>
      <Button title="Submit" onPress={handleSubmit(d => alert(JSON.stringify(d)))} />
    </ExampleBlock>
  );
};

export default function WatchResetScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>watch / reset / setValue Example</Text>
      <WatchResetExample />
    </ScrollView>
  );
}