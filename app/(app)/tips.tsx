import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Image } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SafetyTipsList from '@/components/SafetyTipsList';
import { COLORS } from '@/constants/Colors';

export default function TabTwoScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={
				<Image
					source={require('@/assets/images/firetruck.jpg')}
					style={styles.reactLogo}
					resizeMode="cover"
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText
					type="title"
					style={{ color: COLORS.secondary, paddingTop: 5 }}
				>
					Tips and safaty
				</ThemedText>
			</ThemedView>
			<ThemedText>
				Browse essential fire safety tips to protect your home and family.
			</ThemedText>
			<SafetyTipsList />
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
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
	},
});
