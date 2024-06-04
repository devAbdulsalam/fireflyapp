import Ionicons from '@expo/vector-icons/Ionicons';
import {
	StyleSheet,
	Image,
	Platform,
	Pressable,
	ScrollView,
	Alert,
	StatusBar,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/context/authContext';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import Loader from '@/components/Loader';
import EmailModal from '@/components/modals/EmailModal';
import PhoneModal from '@/components/modals/PhoneModal';
import PasswordModal from '@/components/modals/PasswordModal';
import { useState } from 'react';
import axios from 'axios';
import { COLORS } from '@/constants/Colors';
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function TabTwoScreen() {
	const { profile, setProfile, setSesion, token, setToken } = useAuth();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isProfileModal, setIsProfileModal] = useState<boolean>(false);
	const [isPhoneModal, setIsPhoneModal] = useState<boolean>(false);
	const [isPasswordModal, setIsPasswordModal] = useState<boolean>(false);
	// const handleHowTo = () => {
	// 	console.log('open phone modal');
	// 	setIsPhoneModal(true);
	// };
	const handleProfile = () => {
		setIsProfileModal(true);
		console.log('open profile modal');
	};

	const handlePassword = () => {
		console.log('open password modal');
		setIsPasswordModal(true);
	};

	const updateUser = async (option: any) => {
		try {
			setIsLoading(true);
			console.log(option);
			const { data } = await axios.patch(
				`${apiUrl}/users/${profile.id}`,
				option,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (data) {
				Alert.alert('Profile updated', 'Profile updated successfully');
				console.log('data', data);
				setProfile(data);
				await AsyncStorage.setItem('userInfo', JSON.stringify(data));
				router.navigate('/(app)/profile');
			}
		} catch (error) {
			console.log(error);
			Alert.alert('Something went wrong', 'Something went wrong');
			// router.replace('/(app)');
		} finally {
			setIsLoading(false);
		}
	};
	const updatePassword = async (option: any) => {
		try {
			setIsLoading(true);
			const { data } = await axios.post(
				`${apiUrl}/users/change-password`,
				option,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (data) {
				Alert.alert('Password updated', 'Password updated successfully');
				console.log('data', data);
				router.replace('/(app)/profile');
			}
		} catch (error) {
			console.log(error);
			Alert.alert('Something went wrong', 'Something went wrong');
			// router.replace('/(app)');
		} finally {
			setIsLoading(false);
		}
	};
	const logout = async () => {
		await AsyncStorage.removeItem('accessToken');
		await AsyncStorage.removeItem('userInfo');
		await AsyncStorage.removeItem('refreshToken');
		await AsyncStorage.removeItem('isOnboarded');
		setToken(null);
		setSesion(null);
		setProfile(null);
		router.navigate('/');
	};
	const handleLogout = () => {
		Alert.alert('Are you sure?', 'You will be logout', [
			{
				text: 'cancel',
				onPress: () => {
					console.log('cancel');
				},
			},
			{
				text: 'ok',
				onPress: logout,
			},
		]);
	};
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView style={{ flex: 1 }}>
					<ThemedView style={styles.titleContainer}>
						<Image
							source={{
								uri: `https://ui-avatars.com/api/?name=${profile?.username}`,
							}}
							style={styles.image}
						/>
						<ThemedText type="defaultSemiBold">{profile?.username}</ThemedText>
						<ThemedText style={{ color: COLORS.secondary, paddingTop: 5 }}>
							{profile?.role}
						</ThemedText>
					</ThemedView>

					<ThemedView
						style={{
							marginTop: 20,
							padding: 10,
							gap: 8,
							backgroundColor: 'transparent',
						}}
					>
						<ThemedText
							type="defaultSemiBold"
							style={{ color: COLORS.secondary, paddingTop: 5 }}
						>
							Profile Settings
						</ThemedText>

						<Pressable
							onPress={() => router.navigate('/about')}
							// style={styles.card}
						>
							<ThemedView style={styles.card}>
								<ThemedView>
									<ThemedText type="defaultSemiBold">
										How to Use Firefly
									</ThemedText>
									<ThemedText>How to use firefly</ThemedText>
								</ThemedView>
								<FontAwesome5 name="chevron-right" size={18} />
							</ThemedView>
						</Pressable>
						<Pressable onPress={handleProfile}>
							<ThemedView style={styles.card}>
								<ThemedView>
									<ThemedText type="defaultSemiBold">Update Profile</ThemedText>
									<ThemedText>Edit profile information</ThemedText>
								</ThemedView>
								<FontAwesome5 name="pen" size={18} />
							</ThemedView>
						</Pressable>
						<Pressable onPress={handlePassword}>
							<ThemedView style={styles.card}>
								<ThemedView>
									<ThemedText type="defaultSemiBold">
										Change Password
									</ThemedText>
									<ThemedText>*****</ThemedText>
								</ThemedView>
								<FontAwesome5 name="pen" size={18} />
							</ThemedView>
						</Pressable>
						<Pressable
							onPress={handleLogout}
							style={{
								justifyContent: 'center',
								backgroundColor: COLORS.lightRed,
								flexDirection: 'row',
								padding: 15,
								borderRadius: 10,
							}}
						>
							<ThemedText type="defaultSemiBold">Log out</ThemedText>
						</Pressable>
					</ThemedView>
				</ScrollView>
			)}
			{isProfileModal && (
				<EmailModal
					handlePress={updateUser}
					setIsModal={setIsProfileModal}
					isModal={isProfileModal}
				/>
			)}
			{isPasswordModal && (
				<PasswordModal
					handlePress={updatePassword}
					setIsModal={setIsPasswordModal}
					isModal={isPasswordModal}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		paddingVertical: StatusBar.currentHeight,
		alignItems: 'center',
		// gap: 8,
	},
	image: {
		marginTop: 20,
		width: 90,
		height: 90,
		borderRadius: 45,
		borderColor: COLORS.secondary,
		borderWidth: 1,
	},
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: 'gary',
		borderRadius: 5,
		padding: 8,
	},
});
