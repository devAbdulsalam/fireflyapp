import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from '@/context/authContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<AuthProvider>
				<QueryClientProvider client={new QueryClient()}>
					<Stack>
						<Stack.Screen name="index" options={{ headerShown: false }} />
						<Stack.Screen name="index2" options={{ headerShown: false }} />
						<Stack.Screen name="index3" options={{ headerShown: false }} />
						<Stack.Screen name="(app)" options={{ headerShown: false }} />
						<Stack.Screen name="(auth)" options={{ headerShown: false }} />
						<Stack.Screen name="games" options={{ headerShown: false }} />
						{/* <Stack.Screen name="features" options={{ headerShown: false }} /> */}
						<Stack.Screen name="+not-found" />
					</Stack>
				</QueryClientProvider>
			</AuthProvider>
		</ThemeProvider>
	);
}
