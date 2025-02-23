import { Player, Team } from '@/components/columns/players';

const teams: Team[] = [
	{
		name: 'Inter Miami CF',
		image: [
			'https://images.mlssoccer.com/image/upload/assets/logos/MIA.svg',
		],
	},
	{
		name: 'Charlotte FC',
		image: [
			'https://images.mlssoccer.com/image/upload/t_q-best/v1634242594/assets/logos/CLT_Logo_480x480v2.png',
		],
	},
	{
		name: 'Colorado Rapids',
		image: [
			'https://images.mlssoccer.com/image/upload/t_q-best/v1614970746/assets/logos/436-colorado-logo_yifx69.png',
		],
	},
	{
		name: 'San Diego FC',
		image: [
			'https://images.mlssoccer.com/image/upload/t_q-best/v1736287039/assets/sdn/logos/sd_logo_pri_fc_rgb_480x480__1__720_1_jlm4tx.png',
		],
	},
	{
		name: 'New York Red Bulls',
		image: [
			'https://images.mlssoccer.com/image/upload/t_q-best/v1614970744/assets/logos/399-ny-red-bulls-logo_o6xw9r.png',
		],
	},
	{
		name: 'San Jose Earthquakes',
		image: [
			'https://images.mlssoccer.com/image/upload/t_q-best/v1620997962/assets/logos/SJ-Logo-480px.png',
		],
	},
	{
		name: 'Crown Legacy Football Club',
		image: [
			'https://images.mlssoccer.com/image/upload/t_q-best/v1677077684/assets/mnp/logos/clubs/CLT2-Club_Logo-Full_Color_msnssi.png',
		],
	},
];

const data: Player[] = [
	{
		id: '326860c3',
		name: 'CJ Dos Santos',
		photoUrl:
			'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-mia/nrvfhks8mv8yicve8lru.png',
		surveryValues: {
			culture: 1,
			performance: 4,
		},
		position: 'Goalkeeper',
		team: teams[0],
		status: {
			label: 'Loaned Out',
			variant: 'completed',
		},
	},
	{
		id: '326860c4',
		name: 'Pablo Sisniega',
		photoUrl:
			'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/prd-league/cnmcqtkah3yyrib2ixxf.png',
		surveryValues: {
			culture: 2,
			performance: 5,
		},
		team: teams[teams.length - 1],
		position: 'Goalkeeper',
		status: {
			label: 'Loaned Out',
			variant: 'completed',
		},
	},
	{
		id: '326860c5',
		name: 'Jacob Jackson',
		photoUrl:
			'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls/kx2x0zzi0avkhuvma4dw.png',
		surveryValues: {
			culture: 3,
			performance: 6,
		},
		position: 'Goalkeeper',
		team: teams[teams.length - 2],
		status: {
			label: 'Signed',
			variant: 'pending',
		},
	},
	{
		id: '326860c6',
		name: 'Andres Reyes',
		photoUrl:
			'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls/udh0vvgplxjwenyyc44k.png',
		surveryValues: {
			culture: 4,
			performance: 5,
		},
		team: teams[teams.length - 3],
		position: 'Defender',
		status: {
			label: 'Signed',
			variant: 'pending',
		},
	},
	{
		id: '326860c7',
		name: 'Paddy McNair',
		photoUrl:
			'https://www.mlssoccer.com/assets/images/Fallback-Headshot.png',
		surveryValues: {
			culture: 5,
			performance: 4,
		},
		team: teams[teams.length - 4],
		position: 'Defender',
		status: {
			label: 'Signed',
			variant: 'pending',
		},
	},
	{
		id: '326860c8',
		name: 'Ian Pilcher',
		photoUrl:
			'https://www.mlssoccer.com/assets/images/Fallback-Headshot.png',
		surveryValues: {
			culture: 6,
			performance: 3,
		},
		team: teams[teams.length - 5],
		position: 'Defender',
		status: {
			label: 'Signed',
			variant: 'pending',
		},
	},
	{
		id: '326860c9',
		name: 'Jasper Löffelsend',
		photoUrl:
			'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls/bivn1gbui0rkhlebp5ek.png',
		surveryValues: {
			culture: 5,
			performance: 2,
		},
		team: teams[teams.length - 6],
		position: 'Midfielder',
		status: {
			label: 'Supplemental Slots 25-28',
			variant: 'pending',
		},
	},
	{
		id: '326860c10',
		name: 'Hamady Diop',
		photoUrl:
			'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls/rkqefxvqdcvhehdkr7gm.png',
		surveryValues: {
			culture: 4,
			performance: 1,
		},
		team: teams[1],
		position: 'Defender',
		status: {
			label: 'Loaned Out',
			variant: 'pending',
		},
	},
];

export const getPlayers = async (): Promise<Player[]> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!!data) {
				resolve(data);
			} else {
				reject([]);
			}
		}, 1000);
	});
};

export const getTeams = async (): Promise<Team[]> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!!data) {
				resolve(teams);
			} else {
				reject([]);
			}
		}, 1000);
	});
};
