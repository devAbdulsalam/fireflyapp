import {
	StyleSheet,
	Text,
	View,
	Modal,
	Pressable,
	TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import { useTheme } from '@react-navigation/native';
import PrimaryButton from '@/components/PrimaryButton';
import Icons from '@expo/vector-icons/MaterialIcons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import Colors, { COLORS } from '@/constants/Colors';

const EmailModal = ({ handlePress, isModal, setIsModal }) => {
	const theme = useTheme();
	const { profile } = useAuth();
	const [username, setUserName] = useState(profile.username);
	const [email, setEmail] = useState(profile.email);
	const [phone, setPhone] = useState(profile.phone);

	useEffect(() => {
		if (phone.length <= 14) {
			setPhone(phone);
		} else {
			setPhone(phone.substring(0, 14));
		}
	}, [phone]);

	const updateEmail = () => {
		if (!email) {
			return;
		}
		setIsModal(false);
		const option = { username, phone, email };
		handlePress(option);
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
					<Text style={styles.title}>Update Profile</Text>
					<Text>Phone</Text>
					<Animated.View
						entering={FadeInDown.delay(200).duration(1000).springify()}
						style={{ position: 'relative', width: '100%' }}
					>
						<TextInput
							placeholder="Your username"
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
							value={username}
							onChangeText={setUserName}
						/>
						<Icons
							name="person"
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
					<Text>Email</Text>
					<Animated.View
						entering={FadeInDown.delay(200).duration(1000).springify()}
						style={{ position: 'relative', width: '100%' }}
					>
						<TextInput
							placeholder="Your Email"
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
							value={email}
							onChangeText={setEmail}
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
					<Text>Phone</Text>
					<Animated.View
						entering={FadeInDown.delay(200).duration(1000).springify()}
						style={{ position: 'relative', width: '100%' }}
					>
						<TextInput
							placeholder="Your phone"
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
							keyboardType="numeric"
							value={phone}
							onChangeText={setPhone}
						/>
						<Icons
							name="phone"
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
							onPress={updateEmail}
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

export default EmailModal;

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
