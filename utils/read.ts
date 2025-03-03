import { Player } from '@/components/columns/players';

export const players: Player[] = [
	{
		id: 1,
		name: 'Pablo Sisniega ',
	},
	{
		id: 2,
		name: 'CJ dos Santos ',
	},
	{
		id: 3,
		name: 'Jacob Jackson ',
	},
	{
		id: 4,
		name: 'Ian Pilcher ',
	},
	{
		id: 5,
		name: 'Paddy McNair ',
	},
	{
		id: 6,
		name: 'Andrés Reyes ',
	},
	{
		id: 7,
		name: 'Christopher McVey ',
	},
	{
		id: 8,
		name: 'Franco Negri ',
	},
	{
		id: 9,
		name: 'Hamady Diop ',
	},
	{
		id: 10,
		name: 'Willy Kumado ',
	},
	{
		id: 11,
		name: 'Jeppe Tverskov ',
	},
	{
		id: 12,
		name: 'Aníbal Godoy ',
	},
	{
		id: 13,
		name: 'Manu Duah ',
	},
	{
		id: 14,
		name: 'Luca de la Torre ',
	},
	{
		id: 15,
		name: 'Heine Gikling Bruseth ',
	},
	{
		id: 16,
		name: 'Jasper Löffelsend ',
	},
	{
		id: 17,
		name: 'Alejandro Alvarado ',
	},
	{
		id: 18,
		name: 'Emmanuel Boateng ',
	},
	{
		id: 19,
		name: 'Onni Valakari ',
	},
	{
		id: 20,
		name: 'Hirving Lozano ',
	},
	{
		id: 21,
		name: 'Alex Mighten ',
	},
	{
		id: 22,
		name: 'Anders Dreyer ',
	},
	{
		id: 23,
		name: 'Marcus Ingvartsen ',
	},
	{
		id: 24,
		name: 'Tomás Ángel ',
	},
	{
		id: 25,
		name: 'Anisse Saidi ',
	},
];

export const getPlayers = async (): Promise<Player[]> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!!players) {
				resolve(players);
			} else {
				reject([]);
			}
		}, 1000);
	});
};
