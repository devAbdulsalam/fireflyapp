import {
	StyleSheet,
	Text,
	View,
	Modal,
	Pressable,
	TextInput,
	Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '@/context/authContext';
import { useTheme } from '@react-navigation/native';
import PrimaryButton from '@/components/PrimaryButton';
import Icons from '@expo/vector-icons/MaterialIcons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import Colors, { COLORS } from '@/constants/Colors';

const PasswordModal = ({ handlePress, isModal, setIsModal }) => {
	const theme = useTheme();
	const [password, setPassword] = useState('');
	const [cPassword, setCPassword] = useState('');

	const updatePassword = () => {
		if (!password) {
			Alert.alert('Password error', 'Password is requird');
			return;
		}
		if (password !== cPassword) {
			Alert.alert('Confirm password error', 'Passwords must be the same');
			return;
		}
		setIsModal(false);
		handlePress({ newPassword: password });
	};

	return (
		<Modal
			visible={isModal}
			statusBarTranslucent={true}
			transparent={true}
			animationType="slide"
		>
			<View style={styles.content}>
				<View style={styles.card}>
					<Text style={styles.title}>Change Password</Text>
					<Text>Password</Text>
					<Animated.View
						entering={FadeInDown.delay(200).duration(1000).springify()}
						style={{ position: 'relative', width: '100%' }}
					>
						<TextInput
							placeholder="Your Password"
							style={{
								fontSize: 16,
								fontWeight: '500',
								color: theme.colors.text,
								paddingLeft: 48,
								paddingRight: 12,
								height: 48,
								borderRadius: 12,
								backgroundColor: theme.colors.background,
								width: '100%',
							}}
							value={password}
							onChangeText={setPassword}
						/>
						<Icons
							name="email"
							size={24}
							color={theme.colors.text}
							style={{
								position: 'absolute',
								left: 12,
								top: 12,
								// opacity: 0.5,
							}}
						/>
					</Animated.View>
					<Text>Confirm Password</Text>
					<Animated.View
						entering={FadeInDown.delay(200).duration(1000).springify()}
						style={{ position: 'relative', width: '100%' }}
					>
						<TextInput
							placeholder="Your Password"
							style={{
								fontSize: 16,
								fontWeight: '500',
								color: theme.colors.text,
								paddingLeft: 48,
								paddingRight: 12,
								height: 48,
								borderRadius: 12,
								backgroundColor: theme.colors.background,
								width: '100%',
							}}
							value={cPassword}
							onChangeText={setCPassword}
						/>
						<Icons
							name="email"
							size={24}
							color={theme.colors.text}
							style={{
								position: 'absolute',
								left: 12,
								top: 12,
								// opacity: 0.5,
							}}
						/>
					</Animated.View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							marginTop: 24,
							gap: 8,
						}}
					>
						<Pressable
							onPress={() => setIsModal(false)}
							style={[
								styles.button,
								{
									backgroundColor: 'rgba(0,0,0,0.1)',
								},
							]}
						>
							<Text>Cancel</Text>
						</Pressable>
						<Pressable
							onPress={updatePassword}
							style={[
								styles.button,
								{
									backgroundColor: 'blue',
								},
							]}
						>
							<Text style={{ color: 'white' }}>Update</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default PasswordModal;

const styles = StyleSheet.create({
	card: {
		width: '90%',
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 8,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	text: {
		fontWeight: '600',
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
	button: {
		width: '50%',
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		height: 56,
		borderRadius: 8,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	desc: {
		fontSize: 16,
		lineHeight: 24,
		opacity: 0.7,
	},
	title: {
		fontWeight: '600',
		fontSize: 18,
		marginBottom: 12,
	},
});
