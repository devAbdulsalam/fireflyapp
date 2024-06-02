import { StyleSheet, View } from 'react-native';
import React from 'react';
import Camera from '@/components/Camera';

const scan = () => {
	return (
		<View style={styles.container}>
			<Camera />
		</View>
	);
};

export default scan;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		paddingTop: 10,
	},
});
