import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputGroup: {
      marginBottom: 16,
      flex: 1,
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    inputLabel: {
      fontWeight: '600',
      color: '#2d3748',
      fontSize: 14,
    },
    requiredAsterisk: {
      color: '#e53e3e',
      marginLeft: 4,
    },
    inputField: {
      padding: 12,
      borderWidth: 2,
      borderColor: '#e2e8f0',
      borderRadius: 6,
      fontSize: 16,
      backgroundColor: '#ffffff',
      minHeight: 48,
    },
    textarea: {
      minHeight: 100,
      textAlignVertical: 'top',
    },
    inputError: {
      borderColor: '#e53e3e',
    },
    errorMessage: {
      color: '#e53e3e',
      fontSize: 12,
      marginTop: 4,
      fontWeight: '500',
    },
  });