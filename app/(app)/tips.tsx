// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
// import { Collapsible } from '@/components/Collapsible';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SafetyTipsList from '@/components/SafetyTipsList';
import { COLORS } from '@/constants/Colors';

export default function TabTwoScreen() {
	return (
		<SafeAreaView
		// headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
		>
			<ScrollView style={{ width: '100%' }}>
				<ThemedView style={styles.container}>
					<Image
						source={require('@/assets/images/firetruck.jpg')}
						style={styles.reactLogo}
						resizeMode="cover"
					/>
				</ThemedView>
				<ThemedView style={styles.titleContainer}>
					<ThemedText
						type="title"
						style={{ color: COLORS.secondary, paddingTop: 5 }}
					>
						Tips and safaty
					</ThemedText>
				</ThemedView>
				<ThemedText style={{  padding: 15 }}>
					Browse essential fire safety tips to protect your home and family.
				</ThemedText>
				<SafetyTipsList />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	reactLogo: {
		// height: 178,
		// width: 290,
		// bottom: 0,
		// left: 0,
		// position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
		padding: 10,
		backgroundColor: 'transparent'
	},
});
