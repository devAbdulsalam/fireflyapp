import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { HelloWave } from './HelloWave';

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
							borderWidth: 2,
						}}
					/>
				</Link>
				<Link
					href={'/(app)/explore'}
					asChild
					style={{
						padding: 10,
					}}
				>
					<FontAwesome name="camera" size={24} />
				</Link>
			</View>
			<Text style={styles.headerText}>Welcome</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		width: '100%',
		padding: 10,
		marginTop: StatusBar.currentHeight,
	},
	headerText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
