import { Image, StyleSheet, View, Pressable } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/context/authContext';
import { Link, router } from 'expo-router';
import Header from '@/components/Header';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import { COLORS } from '@/constants/Colors';
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function HomeScreen() {
	const { profile } = useAuth();
	return (
		<View>
			<Header profile={profile} />
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title" style={{ color: COLORS.secondary }}>
					{profile ? `Hello ${profile?.username}` : 'Hello'}
				</ThemedText>
				<HelloWave />
			</ThemedView>
			<View style={styles.stepContainer}>
				<Features />
				<Gallery />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		marginVertical: 5,
		backgroundColor: 'transparent',
	},
	stepContainer: {
		padding: 15,
		marginTop: 8,
		gap: 10,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
