import {
	Image,
	StyleSheet,
	Platform,
	ScrollView,
	Pressable,
} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import axios from 'axios';
import { useAuth } from '@/context/authContext';
import { Link, router } from 'expo-router';
import Header from '@/components/Header';
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function HomeScreen() {
	const { profile } = useAuth();
	return (
		<ScrollView
		// headerBackgroundColor={{ light: '#e25822', dark: '#1D3D47' }}
		// headerImage={
		// 	<Image
		// 		source={require('@/assets/images/partial-react-logo.png')}
		// 		style={styles.reactLogo}
		// 	/>
		// }
		>
			<Header profile={profile} />
			<ThemedView style={styles.container}>
				<ThemedView style={styles.titleContainer}>
					<ThemedText type="title">
						{profile ? `Hello ${profile?.username}` : 'Hello'}
					</ThemedText>
					<HelloWave />
				</ThemedView>
				<ThemedText type="subtitle">About Firefly</ThemedText>
				<ThemedView style={styles.stepContainer}>
					<ThemedText type="subtitle">Step 1: Try Firefly</ThemedText>
					<ThemedText>
						Firefly app provides a comprehensive fire safety experience{' '}
						<ThemedText type="defaultSemiBold">Firefly</ThemedText> provides
						essential fire safety tips and resources to help you protect your
						home and loved ones. From creating a fire escape plan to maintaining
						your smoke alarms, we’ve got you covered.
					</ThemedText>
				</ThemedView>

				<ThemedView style={styles.stepContainer}>
					<ThemedText type="subtitle">Step 2: Report Incident</ThemedText>
					<ThemedText>
						<ThemedText type="defaultSemiBold">Spot a fire? </ThemedText>
						Open your{' '}
						<ThemedText type="defaultSemiBold">
							Firefly app
						</ThemedText> scan{' '}
						<ThemedText type="defaultSemiBold">take a picture</ThemedText> of
						fire incident in your locality{' '}
						<ThemedText type="defaultSemiBold">Send report</ThemedText>, and
						we'll alert the local fire department Fire Fighter would arive
						<ThemedText type="defaultSemiBold"> your loaction</ThemedText> as
						soon as possible. Together, we can help keep our community safe.
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
						Stay informed with real-time alerts about nearby fires and
						evacuation notices.
						<ThemedText type="defaultSemiBold">
							Access interactive fire safety drills, educational videos
						</ThemedText>
						, and much more to ensure you’re always prepared for any emergency.
					</ThemedText>
				</ThemedView>
			</ThemedView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		marginVertical: 5,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
