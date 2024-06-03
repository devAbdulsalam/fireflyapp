import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
	return (
		<View>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Game and Quiz</ThemedText>
			</ThemedView>
			<ThemedText>Comming soon</ThemedText>
		</View>
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
