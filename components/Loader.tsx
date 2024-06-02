import { View, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

const Loader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={'large'} color={'#36d7b7'} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
});
export default Loader;
