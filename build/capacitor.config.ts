import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mingo.playcafe',
  appName: 'Mingo Play Café',
  webDir: 'dist',
  server: {
    // url: 'http://localhost:5173',
    // cleartext: true
  },
  ios: { contentInset: 'automatic', backgroundColor: '#FFFFFF', scheme: 'Capacitor' },
  android: { backgroundColor: '#FFFFFF' },
  plugins: { SplashScreen: { launchShowDuration: 0 } }
};

export default config;