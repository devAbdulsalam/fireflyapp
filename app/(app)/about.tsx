import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const howTo = () => {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={
				<Image
					source={require('@/assets/images/firetruck.jpg')}
					// style={styles.reactLogo}
					resizeMode="cover"
				/>
			}
		>
			<ThemedText type="subtitle">About Firefly</ThemedText>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 1: Try Firefly</ThemedText>
				<ThemedText>
					Firefly app provides a comprehensive fire safety experience{' '}
					<ThemedText type="defaultSemiBold">Firefly</ThemedText> provides
					essential fire safety tips and resources to help you protect your home
					and loved ones. From creating a fire escape plan to maintaining your
					smoke alarms, we’ve got you covered.
				</ThemedText>
			</ThemedView>

			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 2: Report Incident</ThemedText>
				<ThemedText>
					<ThemedText type="defaultSemiBold">Spot a fire? </ThemedText>
					Open your <ThemedText type="defaultSemiBold">
						Firefly app
					</ThemedText>{' '}
					scan <ThemedText type="defaultSemiBold">take a picture</ThemedText> of
					fire incident in your locality{' '}
					<ThemedText type="defaultSemiBold">Send report</ThemedText>, and we'll
					alert the local fire department Fire Fighter would arive
					<ThemedText type="defaultSemiBold"> your loaction</ThemedText> as soon
					as possible. Together, we can help keep our community safe.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 3: Tips</ThemedText>
				<ThemedText>
					<Link href={'/(app)/tips'}>
						<ThemedText type="defaultSemiBold">Tap on </ThemedText>
					</Link>
					to browse essential fire safety tips to learn more about{' '}
					<ThemedText type="defaultSemiBold">Fire safety</ThemedText>
					and regulations to protect your home and family.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">
					Step 4: Real-Time Alerts and Resources
				</ThemedText>
				<ThemedText>
					Stay informed with real-time alerts about nearby fires and evacuation
					notices.
					<ThemedText type="defaultSemiBold">
						Access interactive fire safety drills, educational videos
					</ThemedText>
					, and much more to ensure you’re always prepared for any emergency.
				</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
};

export default howTo;

const styles = StyleSheet.create({
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
});
