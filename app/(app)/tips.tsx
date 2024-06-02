import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, SectionList } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SafetyTipsList from '@/components/SafetyTipsList';

export default function TabTwoScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={
				<MaterialIcons
					size={250}
					name="tips-and-updates"
					style={styles.headerImage}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Tips and safaty</ThemedText>
			</ThemedView>
			<ThemedText>
				Browse essential fire safety tips to protect your home and family.
			</ThemedText>
			<SafetyTipsList />
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#e25822',
		bottom: -60,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
});
