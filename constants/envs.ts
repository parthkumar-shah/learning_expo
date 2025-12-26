import Constants from 'expo-constants';

export const APP_NAME =
  Constants.expoConfig?.extra?.appName ?? 'Learning App';

export const APP_URL =
  Constants.expoConfig?.extra?.apiUrl ?? 'https://api.example.com';
