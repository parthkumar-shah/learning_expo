export interface FormData {
  name: string;
  age: number;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  occupation: string;
  company?: string;
  website?: string;
  bio?: string;
}

export interface TextInputProps {
  name: keyof FormData;
  control: any;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'url' | 'textarea' | 'password';
  multiline?: boolean;
  required?: boolean;
}