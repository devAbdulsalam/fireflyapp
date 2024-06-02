import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="settings" options={{ headerShown: false }} />
			<Stack.Screen name="edit-profile" />
		</Stack>
	);
};

export default _layout;
