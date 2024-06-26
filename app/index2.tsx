import React from 'react';
import {
	View,
	SafeAreaView,
	TouchableOpacity,
	StatusBar,
	Image,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import PrimaryButton from '@/components/PrimaryButton';
import ScreenIndicators from '@/components/ScreenIndicators';
import { INTRO_SCREEN_02 } from '@/constants/Screens';
import Icons from '@expo/vector-icons/MaterialIcons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import Artwork02 from '@/components/artworks/Artwork02';
import { router } from 'expo-router';
import { COLORS } from '@/constants/Colors';

const IntroScreen02 = () => {
	const theme = useTheme();
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
				<TouchableOpacity onPress={() => router.navigate('/')}>
					<Icons name="arrow-back-ios" size={24} color={COLORS.secondary} />
				</TouchableOpacity>
			</Animated.View>
			<Animated.View
				entering={FadeInUp.delay(200).duration(1000).springify()}
				style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
			>
				<Image
					source={require('@/assets/images/firetruck3.jpg')}
					style={{ width: 240, height: 240, borderRadius: 10 }}
					resizeMode="cover"
				/>
				{/* <Artwork02 width={300} height={300} color="#e25822" /> */}
			</Animated.View>
			<View style={{ padding: 24 }}>
				<Animated.Text
					entering={FadeInDown.duration(1000).springify()}
					style={{ fontSize: 40, fontWeight: '800', color: COLORS.secondary }}
				>
					{INTRO_SCREEN_02.title}
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
					{INTRO_SCREEN_02.description}
				</Animated.Text>
				<Animated.View
					entering={FadeInDown.delay(200).duration(1000).springify()}
				>
					<ScreenIndicators count={3} activeIndex={1} />
				</Animated.View>

				<Animated.View
					entering={FadeInDown.delay(400).duration(1000).springify()}
					style={{ alignItems: 'center' }}
				>
					<PrimaryButton
						label="Next"
						onPress={() => router.navigate('/index3')}
					/>
				</Animated.View>
			</View>
		</SafeAreaView>
	);
};

export default IntroScreen02;
