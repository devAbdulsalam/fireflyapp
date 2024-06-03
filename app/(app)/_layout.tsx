import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'home' : 'home-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: 'Explore',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'scan' : 'scan-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="tips"
				options={{
					title: 'Tips',
					tabBarIcon: ({ color, focused }) => (
						<MaterialIcons
							name={focused ? 'tips-and-updates' : 'tips-and-updates'}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'person' : 'person-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					href: null,
					// title: 'Profile',
					// tabBarIcon: ({ color, focused }) => (
					// 	<TabBarIcon
					// 		name={focused ? 'person' : 'person-outline'}
					// 		color={color}
					// 	/>
					// ),
				}}
			/>
		</Tabs>
	);
}
