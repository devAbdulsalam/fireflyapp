import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, SectionList } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { safetyTips } from '@/constants/Data';

const SafetyTipsList = () => {
	const renderSectionHeader = ({ section: { title } }) => (
		<ThemedView style={styles.headerContainer}>
			<ThemedText type="defaultSemiBold">{title}</ThemedText>
		</ThemedView>
	);

	const renderItem = ({ item }) => (
		<ThemedView style={styles.itemContainer}>
			<Collapsible title={item.title}>
				<ThemedText>{item.description}</ThemedText>
			</Collapsible>
		</ThemedView>
	);

	const sections = safetyTips.map((section) => ({
		title: section.category,
		data: section.tips,
	}));

	return (
		<SectionList
			sections={sections}
			keyExtractor={(item, index) => item.title + index}
			renderSectionHeader={renderSectionHeader}
			renderItem={renderItem}
		/>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		// backgroundColor: '#f7f7f7',
		padding: 10,
	},
	headerText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	itemContainer: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
});

export default SafetyTipsList;
