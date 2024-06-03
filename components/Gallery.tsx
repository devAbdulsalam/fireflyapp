import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { gallery } from '../constants/Data';
import { COLORS } from '@/constants/Colors';

const Gallery = () => {
	const [specialPromos, setSpecialPromos] = useState(gallery);
	const Header = () => (
		<View style={{ marginBottom: 12 }}>
			<Text
				style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.secondary }}
			>
				Gallery
			</Text>
		</View>
	);
	return (
		<>
			<Header />
			<FlatList
				// ListHeaderComponent={Header}
				data={specialPromos}
				contentContainerStyle={{ paddingHorizontal: 10 }}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => `${item.id}`}
				pagingEnabled
				bounces={false}
				scrollEventThrottle={32}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Image style={styles.image} source={item.img} />
						<View style={styles.details}>
							<Text style={styles.title}>{item.title}</Text>
							<Text>{item.description}</Text>
						</View>
					</View>
				)}
			/>
		</>
	);
};
const styles = StyleSheet.create({
	item: {
		// padding: 10,
		borderWidth: 1,
		borderColor: '#e8e8e8',
		// borderRadius: 5,
		// backgroundColor: 'white',
	},
	image: {
		width: 600,
		height: 360,
	},
	details: {
		padding: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
export default Gallery;
