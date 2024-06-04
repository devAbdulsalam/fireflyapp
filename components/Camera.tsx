import { FontAwesome, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Location from 'expo-location';
import { useState, useRef, useEffect } from 'react';
import { router } from 'expo-router';
import {
	Alert,
	Button,
	Image,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import axios from 'axios';
import { useAuth } from '@/context/authContext';
import Loader from './Loader';
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function App() {
	const [facing, setFacing] = useState('back');
	const [image, setImage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [permission, requestPermission] = useCameraPermissions();
	const [location, setLocation] = useState(null);
	const [address, setAddress] = useState(null);

	Location.setGoogleApiKey('AIzaSyD5GUOMMrDY5Ml8JOQ5j7z7p9f8GaGCDBg');
	const cameraRef = useRef(null);
	const { token } = useAuth();
	const getPremissions = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			Alert.alert(
				'Location access denied',
				'Permission to access location was denied',
				[
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
				]
			);
			return router.navigate('/(app)');
		}
		const currentLocation = await Location.getCurrentPositionAsync({});
		const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
			longitude: currentLocation.coords.longitude,
			latitude: currentLocation.coords.latitude,
		});

		// console.log('Location:', currentLocation);
		// console.log(
		// 	'Reverse Geocoded:',
		// 	reverseGeocodedAddress[0]?.formattedAddress
		// );
		setLocation(currentLocation);
		setAddress(reverseGeocodedAddress[0]?.formattedAddress);
	};
	useEffect(() => {
		getPremissions();
	}, []);
	if (!permission) {
		// Camera permissions are still loading
		return <View />;
	}

	if (!permission.granted) {
		// Camera permissions are not granted yet
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: 'center' }}>
					We need your permission to show the camera
				</Text>
				<Button onPress={requestPermission} title="grant permission" />
			</View>
		);
	}

	function toggleCameraFacing() {
		setFacing((current) => (current === 'back' ? 'front' : 'back'));
	}
	const takePicture = async () => {
		if (!cameraRef) {
			console.log('camera ref is null');
			return;
		}
		try {
			const photo = await cameraRef.current.takePictureAsync();
			console.log(photo);
			setImage(photo.uri);
		} catch (error) {
			console.log(error);
		}
	};
	const RetakePicture = async () => {
		setImage(null);
	};

	const sendImage = async () => {
		try {
			setIsLoading(true);
			const description = `longitude:${location?.coords?.longitude} and latitude:${location?.coords?.latitude}`;
			const latitude = location?.coords?.latitude;
			const longitude = location?.coords?.longitude;
			const option = { latitude, longitude, image, address, description };
			const { data } = await axios.post(`${apiUrl}/reports`, option, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (data) {
				Alert.alert('Report sent', 'Incident reported successfully');
				setImage(null);
				router.replace('/(app)');
			}
		} catch (error) {
			console.log(error);
			Alert.alert('Something went wrong', 'Something went wrong');
			router.replace('/(app)');
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<View style={styles.header}>
						<TouchableOpacity
							style={{
								width: 45,
								alignItems: 'center',
								justifyContent: 'center',
							}}
							onPress={() => router.navigate('/(app)')}
						>
							<FontAwesome6 name="xmark" size={16} />
						</TouchableOpacity>
						<View
							style={{
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
								Scan Fire
							</Text>
						</View>
						<TouchableOpacity
							style={{
								width: 45,
								alignItems: 'center',
								justifyContent: 'center',
							}}
							onPress={toggleCameraFacing}
						>
							<MaterialIcons name="switch-camera" size={24} color="black" />
						</TouchableOpacity>
					</View>
					<View style={styles.container}>
						{image ? (
							<Image source={{ uri: image }} style={styles.camera} />
						) : (
							<CameraView
								style={styles.camera}
								ref={cameraRef}
								facing={facing}
							></CameraView>
						)}
						<View style={styles.buttonContainer}>
							{image ? (
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										paddingHorizontal: 20,
										height: '100%',
										width: '100%',
										paddingBottom: 10,
									}}
								>
									<TouchableOpacity
										style={styles.button}
										onPress={RetakePicture}
									>
										<FontAwesome name="retweet" size={24} color="white" />
										<Text style={styles.text}>Retake picture</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button} onPress={sendImage}>
										<FontAwesome name="check" size={24} color="white" />
										<Text style={styles.text}>Send Image</Text>
									</TouchableOpacity>
								</View>
							) : (
								<TouchableOpacity style={styles.button} onPress={takePicture}>
									<FontAwesome name="camera" size={24} color="white" />
									<Text style={styles.text}>Take picture</Text>
								</TouchableOpacity>
							)}
						</View>
					</View>
				</>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	camera: {
		flex: 1,
	},
	header: {
		backgroundColor: 'white',
		flexDirection: 'row',
		marginTop: StatusBar.currentHeight,
		paddingHorizontal: 10,
		paddingVertical: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		height: '100%',
		width: '100%',
	},
	button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center',
		marginBottom: 5,
	},
	text: {
		fontSize: 14,
		fontWeight: 'bold',
		color: 'white',
	},
});
