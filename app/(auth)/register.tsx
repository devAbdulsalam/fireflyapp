import {
	View,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	useWindowDimensions,
	ActivityIndicator,
	Alert,
	StyleSheet,
	StatusBar,
	Text,
	Platform,
	Image,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
// import { RootStackScreenProps } from '../navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import Icons from '@expo/vector-icons/MaterialIcons';
import Artwork03 from '@/components/artworks/Artwork03';
import { REGISTER_SCREEN } from '@/constants/Screens';
import PrimaryButton from '@/components/PrimaryButton';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Link, router } from 'expo-router';
import Colors, { COLORS } from '@/constants/Colors';
import { addCountryCode } from '@/utils/addCountryCode';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const RegisterScreen = () => {
	const theme = useTheme();
	const [userName, onChangeUserName] = useState('');
	const [email, onChangeEmail] = useState('');
	const [phone, setPhone] = useState('+234');
	const [password, onChangePassword] = useState('');
	const [cPassword, onChangeCPassword] = useState('');
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showCPassword, setShowCPassword] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { height } = useWindowDimensions();
	const [isError, setIsError] = useState('');
	// const clearData = () => {
	// 	setIsError('');
	// 	onChangeUserName('');
	// 	onChangeEmail('');
	// 	onChangePhone('');
	// 	onChangePassword('');
	// 	onChangeCPassword('');
	// };

	const onChangePhone = async (text) => {
		const phoneNumber = await addCountryCode(text);
		setPhone(phoneNumber);
		return;
	};

	const handleSignup = async () => {
		setIsError('');
		if (!userName) {
			return setIsError('user Name is required');
		}
		if (!email) {
			return setIsError('Email is required!');
		}
		if (!phone || phone.length < 14) {
			return setIsError('Please enter a valid 14-digit number!');
		}
		if (!password) {
			return setIsError('Password is required!');
		}
		if (password !== cPassword) {
			return setIsError('Passwords must be the same!');
		}
		setIsLoading(true);
		const userInfo = {
			username: userName,
			email,
			phone,
			password,
		};
		try {
			const { data } = await axios.post(`${apiUrl}/users/register`, userInfo);
			console.log('data', data);
			setIsLoading(false);
			Alert.alert('Registration succesfull', 'Login to continue');
			router.navigate('(auth)/login');
		} catch (error) {
			console.warn('Error', '@post forgot password', error);
			// const message = error?.data || 'Something went wrong!';
			Alert.alert('Error sigining up', 'Something went wrong', [
				{
					text: 'cancel',
					onPress: () => {
						console.log('cancel');
					},
				},
				{
					text: 'ok',
					onPress: () => {
						console.log('cancel');
					},
				},
			]);
			setIsLoading(false);
		}
	};

	return (
		<>
			{isLoading ? (
				<View style={[styles.container, styles.horizontal]}>
					<ActivityIndicator size="large" color={COLORS.lime} />
				</View>
			) : (
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={{ flex: 1 }}
				>
					<SafeAreaView
						style={{
							flex: 1,
							backgroundColor: theme.colors.card,
							// minHeight: height,
						}}
					>
						{/* It Works! */}
						<Animated.View
							entering={FadeInUp.duration(500).springify()}
							style={{
								paddingHorizontal: 24,
								height: 52,
								alignItems: 'center',
								flexDirection: 'row',
							}}
						>
							<TouchableOpacity onPress={() => router.replace('/(auth)login')}>
								<Icons
									name="arrow-back-ios"
									size={24}
									color={theme.colors.text}
								/>
							</TouchableOpacity>
						</Animated.View>

						<Animated.View
							entering={FadeInUp.delay(200).duration(1000).springify()}
							style={{
								alignItems: 'center',
								flex: 1,
								justifyContent: 'center',
							}}
						>
							<Artwork03 width={240} height={240} />
						</Animated.View>

						<View style={{ padding: 24 }}>
							<Animated.Text
								entering={FadeInDown.duration(1000).springify()}
								style={{
									fontSize: 40,
									fontWeight: '800',
									color: theme.colors.text,
								}}
							>
								{REGISTER_SCREEN.title}
							</Animated.Text>
							<Animated.Text
								entering={FadeInDown.delay(100).duration(1000).springify()}
								style={{
									// opacity: 0.5,
									marginTop: 16,
									fontSize: 16,
									color: theme.colors.text,
								}}
							>
								{REGISTER_SCREEN.description}
							</Animated.Text>

							<View style={{ alignItems: 'center', gap: 16, marginTop: 32 }}>
								<Animated.View
									entering={FadeInDown.delay(200).duration(1000).springify()}
									style={{ position: 'relative', width: '100%' }}
								>
									<TextInput
										placeholder="Your Username"
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
										value={userName}
										onChangeText={onChangeUserName}
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
										onChangeText={onChangeEmail}
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
								<Animated.View
									entering={FadeInDown.delay(200).duration(1000).springify()}
									style={{ position: 'relative', width: '100%' }}
								>
									<View
										style={{
											justifyContent: 'center',
											// marginLeft: 5,
											position: 'absolute',
											left: 12,
											top: 12,
											zIndex: 10,
										}}
									>
										<Image
											// source={flag}
											source={require('@/assets/images/ng_flag.png')}
											resizeMode="contain"
											style={{
												width: 30,
												height: 40,
											}}
										/>
									</View>
									<TextInput
										placeholder="Enter phone number"
										onChangeText={onChangePhone}
										defaultValue="+234"
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
									/>
									{/* <Icons
										name="phone"
										size={24}
										color={theme.colors.text}
										style={{
											
											// opacity: 0.5,
										}}
									/> */}
								</Animated.View>

								<Animated.View
									entering={FadeInDown.delay(400).duration(1000).springify()}
									style={{ position: 'relative', width: '100%' }}
								>
									<TextInput
										onChangeText={onChangePassword}
										value={password}
										secureTextEntry={!showPassword}
										placeholder="******"
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
									/>
									<Icons
										name="lock"
										size={24}
										color={theme.colors.text}
										style={{
											position: 'absolute',
											left: 12,
											top: 12,
											// opacity: 0.5,
										}}
									/>

									<TouchableOpacity
										style={styles.eyes}
										onPress={() => setShowPassword(!showPassword)}
									>
										{!showPassword ? (
											<FontAwesome name="eye" size={16} />
										) : (
											<FontAwesome name="eye-slash" size={16} />
										)}
									</TouchableOpacity>
								</Animated.View>
								<Animated.View
									entering={FadeInDown.delay(400).duration(1000).springify()}
									style={{ position: 'relative', width: '100%' }}
								>
									<TextInput
										onChangeText={onChangeCPassword}
										value={cPassword}
										secureTextEntry={!showCPassword}
										placeholder="confirm password"
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
									/>
									<Icons
										name="lock"
										size={24}
										color={theme.colors.text}
										style={{
											position: 'absolute',
											left: 12,
											top: 12,
											// opacity: 0.5,
										}}
									/>

									<TouchableOpacity
										style={styles.eyes}
										onPress={() => setShowCPassword(!showCPassword)}
									>
										{!showPassword ? (
											<FontAwesome name="eye" size={16} />
										) : (
											<FontAwesome name="eye-slash" size={16} />
										)}
									</TouchableOpacity>
								</Animated.View>
								<View>
									{isError && <Text style={styles.error}>{isError}</Text>}
								</View>
								<Animated.View
									entering={FadeInDown.delay(600).duration(1000).springify()}
									style={{ width: '100%' }}
								>
									<PrimaryButton label="Register" onPress={handleSignup} />
								</Animated.View>
							</View>
							<View
								style={{
									// flex: 1,
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
									marginVertical: 10,
									marginBottom: 20,
								}}
							>
								<Text style={{ color: 'black' }}>
									Already have an account?{' '}
								</Text>
								<Link href={'/login'} style={styles.textButton}>
									Login
								</Link>
							</View>
						</View>
					</SafeAreaView>
				</KeyboardAvoidingView>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: StatusBar.currentHeight,
		padding: 8,
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
	image: {
		width: '70%',
		aspectRatio: 1,
		maxHeight: 700,
		maxWidth: 400,
	},
	titleText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'green',
		marginTop: 10,
		marginBottom: 20,
	},
	lable: {
		color: 'black',
	},
	input: {
		backgroundColor: 'white',
		borderColor: 'gray',
		borderRadius: 5,
		borderWidth: 1,
		marginTop: 5,
		padding: 10,
	},
	passwordContainer: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: 'gray',
		borderRadius: 5,
		borderWidth: 1,
		flexDirection: 'row',
		height: 48,
		justifyContent: 'space-between',
		marginBottom: 20,
		width: '100%',
	},
	password: {
		width: '100%',
		height: '100%',
		padding: 10,
	},
	eyes: {
		right: 5,
		top: 0,
		justifyContent: 'center',
		padding: 2,
		height: '100%',
		position: 'absolute',
		zIndex: 50,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 6,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'green',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
	link: {
		color: 'white',
	},
	error: {
		color: 'red',
		fontSize: 16,
		lineHeight: 21,
		letterSpacing: 0.25,
	},
	textButton: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: Colors.light.tint,
		marginVertical: 10,
	},
});

export default RegisterScreen;
