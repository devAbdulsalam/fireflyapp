import { COLORS } from './Colors';
import icons from './Icons';
import Images from './Images';

export const safetyTips = [
	{
		category: 'At Home',
		tips: [
			{
				title: 'Install Smoke Alarms',
				description:
					'Ensure smoke alarms are installed on every level of your home, inside bedrooms, and outside sleeping areas. Test them monthly and change the batteries at least once a year.',
			},
			{
				title: 'Create an Escape Plan',
				description:
					'Develop a fire escape plan with your family, and practice it twice a year. Know two ways out of every room and establish a meeting place outside.',
			},
			{
				title: 'Keep Fire Extinguishers Handy',
				description:
					'Place fire extinguishers in key areas like the kitchen, garage, and near fireplaces. Ensure all household members know how to use them.',
			},
			{
				title: 'Use Heaters Safely',
				description:
					'Keep portable heaters at least three feet away from anything that can burn, and never leave them unattended.',
			},
			{
				title: 'Be Cautious with Candles',
				description:
					'Always extinguish candles before leaving a room or going to bed. Use candle holders that won’t tip over easily.',
			},
			{
				title: 'Maintain Electrical Safety',
				description:
					'Do not overload outlets or power strips, and replace any damaged cords immediately. Have an electrician inspect your wiring if you notice flickering lights or tripped breakers.',
			},
			{
				title: 'Store Flammables Properly',
				description:
					'Keep flammable materials like gasoline, paint, and cleaning supplies in a cool, well-ventilated area away from heat sources.',
			},
			{
				title: 'Be Kitchen Safe',
				description:
					'Never leave cooking unattended. Keep flammable objects away from the stove, and have a lid or baking sheet nearby to smother any potential grease fires.',
			},
		],
	},
	{
		category: 'Outdoors',
		tips: [
			{
				title: 'Create a Defensible Space',
				description:
					'Keep a safety zone around your home by clearing away dead vegetation, trimming trees, and removing debris. Use fire-resistant landscaping where possible.',
			},
			{
				title: 'Use Fire Pits Safely',
				description:
					'Only use fire pits away from structures and trees, and always have a water source or fire extinguisher nearby. Never leave a fire pit unattended.',
			},
			{
				title: 'Handle BBQ Grills Safely',
				description:
					'Place grills well away from your home and deck railings, and clean them regularly to prevent grease build-up. Always supervise grilling activities.',
			},
			{
				title: 'Dispose of Cigarettes Properly',
				description:
					'Never toss lit cigarettes on the ground. Use designated receptacles for disposal.',
			},
		],
	},
	{
		category: 'In Case of Fire',
		tips: [
			{
				title: 'Stay Low',
				description:
					'If you encounter smoke, stay low to the ground to avoid inhaling toxic fumes.',
			},
			{
				title: 'Stop, Drop, and Roll',
				description:
					'If your clothes catch fire, stop immediately, drop to the ground, cover your face with your hands, and roll over repeatedly to smother the flames.',
			},
			{
				title: 'Close Doors Behind You',
				description:
					'When escaping, close doors as you go to slow the spread of fire and smoke.',
			},
			{
				title: 'Call for Help',
				description:
					'Once you are safely outside, call 911 or your local emergency number. Never go back inside a burning building.',
			},
		],
	},
];

export const featuresData = [
	{
		id: 3,
		icon: icons.internet,
		color: COLORS.primary,
		backgroundColor: COLORS.lightGreen,
		description: 'About',
		link: '/(app)/about',
	},
	{
		id: 1,
		icon: icons.video,
		color: COLORS.red,
		backgroundColor: COLORS.lightRed,
		description: 'Report',
		link: '(app)/explore',
	},
	{
		id: 5,
		icon: icons.bill,
		color: COLORS.yellow,
		backgroundColor: COLORS.lightyellow,
		description: 'Tips',
		link: '(app)/tips',
	},
	{
		id: 6,
		icon: icons.game,
		color: COLORS.primary,
		backgroundColor: COLORS.lightGreen,
		description: 'Games',
		link: '/games',
	},
	{
		id: 2,
		icon: icons.phone,
		color: COLORS.purple,
		backgroundColor: COLORS.lightRed,
		description: 'Report',
		link: '(app)/explore',
	},
];

export const gallery = [
	{
		id: 1,
		img: Images.firemen,
		title: 'Fire men',
		description: 'Fire men putting out fire',
	},
	{
		id: 2,
		img: Images.firetruck,
		title: 'Fire truck',
		description: 'Fire men putting out fire',
	},
	{
		id: 3,
		img: Images.firetruck2,
		title: 'Fire truck',
		description: 'Fire men putting out fire',
	},
	{
		id: 4,
		img: Images.firetruck3,
		title: 'Fire fighters on a truck',
		description: 'Ambulance',
	},
];
