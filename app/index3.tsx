import React from 'react';
import { View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PrimaryButton from '@/components/PrimaryButton';
import ScreenIndicators from '@/components/ScreenIndicators';
import { INTRO_SCREEN_03 } from '@/constants/Screens';
import Icons from '@expo/vector-icons/MaterialIcons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import Artwork02 from '@/components/artworks/Artwork02';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '@/constants/Colors';

const IntroScreen03 = () => {
	const theme = useTheme();
	const handleClick = async () => {
		try {
			await AsyncStorage.setItem('isOnboarded', 'true');
			router.replace('/(auth)/login');
		} catch (error) {
			console.log('Error @ set isOnbaording', error);
		}
	};
	return (
		<SafeAreaView
			style={{
				backgroundColor: theme.colors.card,
				flex: 1,
				paddingTop: StatusBar.currentHeight,
			}}
		>
			<Animated.View
				entering={FadeInUp.duration(1000).springify()}
				style={{
					paddingHorizontal: 24,
					height: 52,
					alignItems: 'center',
					flexDirection: 'row',
				}}
			>
				<TouchableOpacity onPress={() => router.navigate('/index2')}>
					<Icons name="arrow-back-ios" size={24} color={COLORS.secondary} />
				</TouchableOpacity>
			</Animated.View>
			<Animated.View
				entering={FadeInUp.delay(200).duration(1000).springify()}
				style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
			>
				<Artwork02 width={300} height={300} />
			</Animated.View>
			<View style={{ padding: 24 }}>
				<Animated.Text
					entering={FadeInDown.duration(1000).springify()}
					style={{ fontSize: 40, fontWeight: '800', color: COLORS.secondary }}
				>
					{INTRO_SCREEN_03.title}
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
					{INTRO_SCREEN_03.description}
				</Animated.Text>
				<Animated.View
					entering={FadeInDown.delay(200).duration(1000).springify()}
				>
					<ScreenIndicators count={3} activeIndex={2} />
				</Animated.View>

				<Animated.View
					entering={FadeInDown.delay(400).duration(1000).springify()}
					style={{ alignItems: 'center' }}
				>
					<PrimaryButton label="Next" onPress={handleClick} />
				</Animated.View>
			</View>
		</SafeAreaView>
	);
};

export default IntroScreen03;
