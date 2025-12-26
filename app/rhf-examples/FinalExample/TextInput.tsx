import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput as RNTextInput, Text, View } from 'react-native';
import { styles } from './styles';
import { TextInputProps } from './types';

const TextInput: React.FC<TextInputProps> = ({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  multiline = false,
  required = false,
}) => {
  const getKeyboardType = () => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'tel':
        return 'phone-pad';
      case 'number':
        return 'numeric';
      case 'url':
        return 'url';
      default:
        return 'default';
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={styles.inputGroup}>
          <View style={styles.labelContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            {required && <Text style={styles.requiredAsterisk}>*</Text>}
          </View>
          
          <RNTextInput
            style={[
              styles.inputField,
              multiline && styles.textarea,
              error && styles.inputError
            ]}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={(text) =>
              onChange(type === "number" ? Number(text) : text)
            }
            value={value?.toString()}
            keyboardType={getKeyboardType()}
            multiline={multiline}
            numberOfLines={multiline ? 4 : 1}
            secureTextEntry={type === 'password'}
          />
          
          {error && (
            <Text style={styles.errorMessage}>{error.message}</Text>
          )}
        </View>
      )}
    />
  );
};

export default TextInput;
