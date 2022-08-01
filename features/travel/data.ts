import {Travel} from "./types";

export const israel202208: Travel = {
	name: 'Israele Agosto 2022',
	infos: [
		{text: 'travel info item 1',},
		{text: 'travel info item 2',},
		{text: 'travel info item 3',},
	],
	cities: [
		{
			name: 'Fiumicino',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			mapsUrl: 'https://goo.gl/maps/kuD1u6xiJ1btcJ3FA',
			firstDay: '2022-08-05T03:00:00.000Z',
			lastDay: '2022-08-05T06:10:00.000Z',
			infos: [
				{
					text: 'city info item 1',
					url: 'https://www.google.com'
				},
				{
					text: 'city info item 2',
					url: 'https://www.google.com'
				},
				{
					text: 'city info item 3',
					url: 'https://www.google.com'
				},
			],
			events: [
				{
					name: 'Imbarco',
					description: 'test description for event',
					mapsUrl: 'https://www.google.com',
					start: '2022-08-05T03:00:00.000Z',
					end: '2022-08-05T06:10:00.000Z',
					when: 'mattina',
					infos: [
						{
							text: 'event info item 1',
							url: 'https://www.google.com'
						},
						{
							text: 'event info item 2',
							url: 'https://www.google.com'
						},
						{
							text: 'event info item 3',
							url: 'https://www.google.com'
						},
					],
				}
			],
		},
	],
}

export const travels: Record<string, Travel> = {
	'2022-08-israel': israel202208,
}