import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formSchema } from './schema';
import TextInput from './TextInput';
import { FormData } from './types';

const FinalExampleForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      age: 18,
      phoneNumber: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      country: '',
      occupation: '',
      company: '',
      website: '',
      bio: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      Alert.alert('Success', 'Form submitted successfully!');
      reset();
    } catch (error) {
      console.error('Submit error:', error);
      Alert.alert('Error', 'Error submitting form');
    }
  };

  const onReset = () => {
    reset();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.formContainer}>
        <View style={styles.formHeader}>
          <Text style={styles.headerTitle}>Complete User Registration Form</Text>
          <Text style={styles.headerSubtitle}>Fill out all required fields to complete your registration</Text>
        </View>

        {/* Personal Information Section */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.formRow}>
            <TextInput
              name="name"
              control={control}
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
            
            <TextInput
              name="age"
              control={control}
              label="Age"
              placeholder="Enter your age"
              type="number"
              required
            />
          </View>

          <View style={styles.formRow}>
            <TextInput
              name="email"
              control={control}
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              required
            />
            
            <TextInput
              name="phoneNumber"
              control={control}
              label="Phone Number"
              placeholder="Enter your phone number"
              type="tel"
              required
            />
          </View>
        </View>

        {/* Address Information Section */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Address Information</Text>
          
          <TextInput
            name="address"
            control={control}
            label="Street Address"
            placeholder="Enter your street address"
            required
          />

          <View style={styles.formRow}>
            <TextInput
              name="city"
              control={control}
              label="City"
              placeholder="Enter your city"
              required
            />
            
            <TextInput
              name="zipCode"
              control={control}
              label="Zip Code"
              placeholder="Enter zip code"
              required
            />
          </View>
          
          <TextInput
            name="country"
            control={control}
            label="Country"
            placeholder="Enter your country"
            required
          />
        </View>

        {/* Professional Information Section */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Professional Information</Text>
          
          <View style={styles.formRow}>
            <TextInput
              name="occupation"
              control={control}
              label="Occupation"
              placeholder="Enter your occupation"
              required
            />
            
            <TextInput
              name="company"
              control={control}
              label="Company"
              placeholder="Enter your company (optional)"
            />
          </View>

          <TextInput
            name="website"
            control={control}
            label="Website"
            placeholder="Enter your website (optional)"
            type="url"
          />

          <TextInput
            name="bio"
            control={control}
            label="Bio"
            placeholder="Tell us about yourself (optional)"
            multiline
          />
        </View>

        {/* Form Actions */}
        <View style={styles.formActions}>
          <TouchableOpacity
            onPress={onReset}
            style={[styles.btn, styles.btnSecondary]}
            disabled={isSubmitting}
          >
            <Text style={[styles.btnText, styles.btnSecondaryText]}>Reset Form</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[styles.btn, styles.btnPrimary, (!isValid || isSubmitting) && styles.btnDisabled]}
            disabled={isSubmitting || !isValid}
          >
            <Text style={[styles.btnText, styles.btnPrimaryText]}>
              {isSubmitting ? 'Submitting...' : 'Submit Form'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form Status */}
        <View style={styles.formStatus}>
          <Text style={styles.statusText}>Total Errors: {Object.keys(errors).length}</Text>
          <Text style={styles.statusText}>Form Valid: {isValid ? 'Yes' : 'No'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
  },
  formContainer: {
    margin: 16,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  headerTitle: {
    color: '#2d3748',
    marginBottom: 8,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#718096',
    fontSize: 16,
    textAlign: 'center',
  },
  formSection: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    backgroundColor: '#f7fafc',
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#2d3748',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#4299e1',
  },
  formRow: {
    flexDirection: 'row',
    gap: 16,
  },
  formActions: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    minWidth: 120,
    alignItems: 'center',
  },
  btnPrimary: {
    backgroundColor: '#4299e1',
  },
  btnSecondary: {
    backgroundColor: '#e2e8f0',
  },
  btnDisabled: {
    opacity: 0.6,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
  },
  btnPrimaryText: {
    color: 'white',
  },
  btnSecondaryText: {
    color: '#2d3748',
  },
  formStatus: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f0f4f8',
    borderRadius: 6,
    alignItems: 'center',
  },
  statusText: {
    marginVertical: 2,
    fontSize: 14,
    color: '#4a5568',
  },
});

export default FinalExampleForm;