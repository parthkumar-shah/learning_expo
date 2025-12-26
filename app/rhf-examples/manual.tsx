
import { UserFormInput, userFormSchema } from '@/src/types';
import React, { useMemo, useState } from 'react';
import { Button, ScrollView, Switch, Text, TextInput, View } from 'react-native';
import { styles } from './common';

type ManualErrors = Partial<Record<keyof UserFormInput, string>>;

const ManualFormExample =() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [acceptTos, setAcceptTos] = useState(false);
  const [errors, setErrors] = useState<ManualErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const isDirty = useMemo(
    () => !!name || !!email || !!age || acceptTos,
    [name, email, age, acceptTos]
  );

  const validateField = (field: keyof UserFormInput, value: unknown) => {
    // Validate a single field using zod partial parsing for consistency
    const result = userFormSchema.pick({ [field]: true } as Record<keyof UserFormInput, true>).safeParse({ [field]: value });
    setErrors((prev) => ({
      ...prev,
      [field]: result.success ? undefined : result.error.issues[0]?.message || "Invalid",
    }));
    return result.success;
  };

  const validateForm = (): boolean => {
    const payload = { name, email, age, acceptTos };
    const result = userFormSchema.safeParse(payload);
    const newErrors: ManualErrors = {};
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof UserFormInput;
        newErrors[field] = issue.message;
      });
    }
    setErrors(newErrors);
    return result.success;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const ok = validateForm();
    // Simulate async flow
    await new Promise((r) => setTimeout(r, 300));
    setSubmitting(false);
    if (!ok) return;
    // Success path
    console.log("Manual submit payload:", { name, email, age, acceptTos });
    // Reset
    setName("");
    setEmail("");
    setAge("");
    setAcceptTos(false);
    setErrors({});
  };

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Manual Validation Example</Text>
      <View>
        <Text>Name</Text>
        <TextInput
          value={name}
          onChangeText={(t) => {
            setName(t);
            if (errors.name) validateField("name", t);
          }}
          onBlur={() => validateField("name", name)}
          placeholder="John Doe"
          style={{ borderWidth: 1, borderColor: "#ccc", padding: 8 }}
        />
        {!!errors.name && <Text style={{ color: "red" }}>{errors.name}</Text>}
      </View>

      <View>
        <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={(t) => {
            setEmail(t);
            if (errors.email) validateField("email", t);
          }}
          onBlur={() => validateField("email", email)}
          placeholder="john@example.com"
          style={{ borderWidth: 1, borderColor: "#ccc", padding: 8 }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!!errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}
      </View>

      <View>
        <Text>Age</Text>
        <TextInput
          value={age}
          onChangeText={(t) => {
            setAge(t);
            if (errors.age) validateField("age", t);
          }}
          onBlur={() => validateField("age", age)}
          placeholder="18"
          style={{ borderWidth: 1, borderColor: "#ccc", padding: 8 }}
          keyboardType="number-pad"
        />
        {!!errors.age && <Text style={{ color: "red" }}>{errors.age}</Text>}
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Text>Accept TOS</Text>
        <Switch
          value={acceptTos}
          onValueChange={(v) => {
            setAcceptTos(v);
            if (errors.acceptTos) validateField("acceptTos", v ? true : false);
          }}
          onTouchEnd={() => validateField("acceptTos", acceptTos ? true : false)}
        />
      </View>
      {!!errors.acceptTos && <Text style={{ color: "red" }}>{errors.acceptTos}</Text>}

      <Button title={submitting ? "Submitting..." : "Submit"} onPress={handleSubmit} disabled={submitting} />
      <Text style={{ color: "#555" }}>Dirty: {String(isDirty)}</Text>
    </View>
  );
}

export default function ManualScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>Manual Form Example</Text>
      <ManualFormExample />
    </ScrollView>
  );
}