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
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function TabTwoScreen() {
	const { profile, setProfile, setSesion, token, setToken } = useAuth();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isEmalModal, setIsEmailModal] = useState<boolean>(false);
	const [isPhoneModal, setIsPhoneModal] = useState<boolean>(false);
	const [isPasswordModal, setIsPasswordModal] = useState<boolean>(false);
	const handlePhone = () => {
		console.log('open phone modal');
		setIsPhoneModal(true);
	};
	const handleEmail = () => {
		setIsEmailModal(true);
		console.log('open email modal');
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
		setToken(null);
		setSesion(null);
		setProfile(null);
		router.replace('/(auth)/login');
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
						<ThemedText >{profile?.role}</ThemedText>
					</ThemedView>

					<ThemedView
						style={{
							marginTop: 20,
							padding: 10,
							gap: 8,
							backgroundColor: 'transparent',
						}}
					>
						<ThemedText type="defaultSemiBold">Edit Profile</ThemedText>

						<ThemedView style={styles.card}>
							<ThemedView>
								<ThemedText type="defaultSemiBold">Phone</ThemedText>
								<ThemedText>{profile?.phone}</ThemedText>
							</ThemedView>
							<Pressable onPress={handlePhone}>
								<FontAwesome5 name="pen" size={24} />
							</Pressable>
						</ThemedView>
						<ThemedView style={styles.card}>
							<ThemedView>
								<ThemedText type="defaultSemiBold">Email</ThemedText>
								<ThemedText>{profile?.email}</ThemedText>
							</ThemedView>
							<Pressable onPress={handleEmail}>
								<FontAwesome5 name="pen" size={24} />
							</Pressable>
						</ThemedView>
						<ThemedView style={styles.card}>
							<ThemedView>
								<ThemedText type="defaultSemiBold">Password</ThemedText>
								<ThemedText>*****</ThemedText>
							</ThemedView>
							<Pressable onPress={handlePassword}>
								<FontAwesome5 name="pen" size={24} />
							</Pressable>
						</ThemedView>
						<Pressable
							onPress={handleLogout}
							style={{
								justifyContent: 'center',
								backgroundColor: 'white',
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
			{isEmalModal && (
				<EmailModal
					handlePress={updateUser}
					setIsModal={setIsEmailModal}
					isModal={isEmalModal}
				/>
			)}
			{isPhoneModal && (
				<PhoneModal
					handlePress={updateUser}
					setIsModal={setIsPhoneModal}
					isModal={isPhoneModal}
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
	},
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: 'gary',
		borderRadius: 8,
		padding: 8,
	},
});
