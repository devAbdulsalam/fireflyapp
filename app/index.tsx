import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { INTRO_SCREEN_01 } from '@/constants/Screens';
import Home from '@/components/artworks/Family';
import { useTheme } from '@react-navigation/native';
import ScreenIndicators from '@/components/ScreenIndicators';
import PrimaryButton from '@/components/PrimaryButton';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '@/components/Loader';
import * as Location from 'expo-location';

const IntroScreen01 = () => {
	const theme = useTheme();
	// const [isOnboarded, setIsOnboarded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const checkOnboarding = async () => {
		try {
			setIsLoading(true);
			const value = await AsyncStorage.getItem('isOnboarded');
			if (value !== null) {
				router.replace('/(auth)/login');
			}
		} catch (e) {
			console.log('Error @checkOnbaording', e);
		} finally {
			setIsLoading(false);
		}
	};
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
			return;
		}
	};
	useEffect(() => {
		checkOnboarding();
	}, []);
	useEffect(() => {
		getPremissions();
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
					<Animated.View
						entering={FadeInUp.duration(1000).springify()}
						style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
					>
						<Home width={300} height={300} />
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
							{INTRO_SCREEN_01.title}
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
							{INTRO_SCREEN_01.description}
						</Animated.Text>
						<Animated.View
							entering={FadeInDown.delay(200).duration(1000).springify()}
						>
							<ScreenIndicators count={3} activeIndex={0} />
						</Animated.View>
						<Animated.View
							entering={FadeInDown.delay(400).duration(1000).springify()}
							style={{ alignItems: 'center' }}
						>
							<PrimaryButton
								label="Next"
								onPress={() => router.replace('/index2')}
							/>
						</Animated.View>
					</View>
				</SafeAreaView>
			)}
		</>
	);
};

export default IntroScreen01;
