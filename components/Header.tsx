import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { HelloWave } from './HelloWave';
import { COLORS } from '@/constants/Colors';

const Header = ({ profile }: any) => {
	return (
		<View style={styles.header}>
			<View
				style={{
					justifyContent: 'space-between',
					flexDirection: 'row',
				}}
			>
				<Link
					href={'/(app)/user/profile'}
					asChild
					style={{
						padding: 10,
					}}
				>
					<Image
						source={{
							uri:
								profile?.avatar ||
								`https://ui-avatars.com/api/?name=${profile?.username}`,
						}}
						style={{
							height: 48,
							width: 48,
							borderRadius: 24,
							borderWidth: 1,
							borderColor: COLORS.secondary,
						}}
					/>
				</Link>
				<Link
					href={'/(app)/'}
					asChild
					style={{
						paddingHorizontal: 10,
						paddingVertical: 12,
						backgroundColor: 'white',
						borderRadius: 10,
					}}
				>
					<FontAwesome name="bell" size={18} color={COLORS.secondary} />
				</Link>
			</View>
			{/* <Text style={styles.headerText}>Welcome</Text> */}
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		width: '100%',
		padding: 15,
		paddingTop: StatusBar.currentHeight,
		// backgroundColor: 'white',
	},
	headerText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
