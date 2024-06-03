import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { featuresData } from '../constants/Data';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';

interface feature {
	item: {
		icon: string | any;
		description: string;
		color: string;
		backgroundColor: string;
		link: string;
	};
}

const Features = () => {
	const [features, setFeatures] = useState(featuresData);

	const Header = () => (
		<View style={{ marginBottom: 12 }}>
			<Text
				style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.secondary }}
			>
				Features
			</Text>
		</View>
	);
	const handlePress = (item: string) => {
		// console.log('pressed', item);
		router.navigate(`${item}`);
	};
	const renderItem = ({ item }: feature) => (
		<TouchableOpacity
			style={{
				marginBottom: 12,
				minWidth: 60,
				alignItems: 'center',
			}}
			onPress={() => handlePress(item.link)}
		>
			<View
				style={[styles.features, { backgroundColor: item.backgroundColor }]}
			>
				<Image
					source={item.icon}
					resizeMode="contain"
					style={[
						styles.image,
						{
							tintColor: item.color,
						},
					]}
				/>
			</View>
			<Text style={{ textAlign: 'center', flexWrap: 'wrap' }}>
				{item.description}
			</Text>
		</TouchableOpacity>
	);

	return (
		<FlatList
			ListHeaderComponent={Header}
			data={features}
			numColumns={54}
			columnWrapperStyle={{ justifyContent: 'space-between' }}
			keyExtractor={(item) => `${item.id}`}
			renderItem={renderItem}
			style={{ marginTop: 12 }}
		/>
	);
};

const styles = StyleSheet.create({
	features: {
		height: 50,
		width: 50,
		marginBottom: 5,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		height: 20,
		width: 20,
	},
});
export default Features;
