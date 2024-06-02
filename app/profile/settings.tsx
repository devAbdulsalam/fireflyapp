import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const settings = () => {
	return (
		<View>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Setting</ThemedText>
			</ThemedView>
			<ThemedText>
				This app includes example code to help you get started.
			</ThemedText>
		</View>
	);
};

export default settings;

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
});
