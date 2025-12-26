
import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const environment = (process.env.APP_ENV || 'development') as keyof typeof envConfig;


  const envConfig = {
      apiUrl: process.env.API_URL,
      bundleIdentifier: 'com.myapp.dev',
      appName: process.env.APP_NAME,
      scheme: 'myapp-dev',
      icon: './assets/icon-dev.png',
    };
  
  return {
    ...config,
    "name": envConfig.appName || "Learning App Live",
    "slug": "learning-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": envConfig.scheme,
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": envConfig.bundleIdentifier,
    },
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#E6F4FE",
        "foregroundImage": "./assets/images/android-icon-foreground.png",
        "backgroundImage": "./assets/images/android-icon-background.png",
        "monochromeImage": "./assets/images/android-icon-monochrome.png"
      },
      "edgeToEdgeEnabled": true,
      "predictiveBackGestureEnabled": false,
      "package": envConfig.bundleIdentifier,
    },
    "web": {
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff",
          "dark": {
            "backgroundColor": "#000000"
          }
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true,
      "reactCompiler": true
    },
    extra: {
      apiUrl: envConfig.apiUrl,
      environment: environment,
      appName: process.env.APP_NAME,
      "eas": {
        "projectId": "763181f6-b241-4f37-bb66-c014bc00bea7"
      }
    },
    "owner": "parth.simform",
  }
};
