import React from 'react';
import { useAuth } from '@/context/authContext';
import { Redirect, Stack } from 'expo-router';

export default function AuthLayout() {
	const { session } = useAuth();
	if (session) {
		return <Redirect href={'/(app)'} />;
	}
	return (
		<Stack>
			<Stack.Screen name="login" options={{ headerShown: false }} />
			<Stack.Screen name="register" options={{ headerShown: false }} />
			<Stack.Screen name="forgot-password" options={{ headerShown: false }} />
		</Stack>
	);
}
