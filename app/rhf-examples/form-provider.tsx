
import React from 'react';
import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { ExampleBlock, styles } from './common';

const ProviderInnerFields = () => {
  const { control } = useFormContext<{ city: string; country: string }>();
  return (
    <View>
      <Controller
        control={control}
        name="city"
        render={({ field }) => (
          <TextInput style={styles.input} placeholder="City" value={field.value} onChangeText={field.onChange} />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextInput style={styles.input} placeholder="Country" value={field.value} onChangeText={field.onChange} />
        )}
      />
    </View>
  );
};

const FormProviderExample = () => {
  const methods = useForm({ defaultValues: { city: '', country: '' } });
  return (
    <ExampleBlock title="7. FormProvider / useFormContext">
      <FormProvider {...methods}>
        <ProviderInnerFields />
        <Button title="Submit" onPress={methods.handleSubmit(d => alert(JSON.stringify(d)))} />
      </FormProvider>
    </ExampleBlock>
  );
};

export default function FormProviderScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>FormProvider Example</Text>
      <FormProviderExample />
    </ScrollView>
  );
}