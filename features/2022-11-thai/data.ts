type DataItem = {
	days: string
	city?: string
	flight?: string
	train?: string
	sleepName: string
	sleepMapsUrl?: string
	sleepBookingPlatform?: string
}

type DataList = DataItem[]

export const thaiTravelData: DataList = [
	{
		days: '2022/11/19',
		flight: 'Roma (FCO) 10:40 -> Londra (GTW) 12:20',
		sleepName: 'Casa Francesco',
	},
	{
		days: '2022/11/20',
		city: 'Londra',
		sleepName: 'Casa francesco',
	},
	{
		days: '2022/11/21',
		flight: 'Londra 21:35 -> Bangkok 16:00 (+1)',
		sleepName: 'Aereo',
	},
	{
		days: '2022/11/22',
		city: 'Bangkok 16:00',
		sleepName: 'Asia Hotel Bangkok',
		sleepMapsUrl: 'https://goo.gl/maps/KTDnZHpYyjpdZGBKA',
		sleepBookingPlatform: 'Agoda',
	},
	{
		days: '2022/11/23',
		city: 'Bangkok',
		sleepName: 'Amari Don Muang Airport Bangkok',
		sleepMapsUrl: 'https://g.page/AmariDonMuang?share',
		sleepBookingPlatform: 'Booking',
	},
	{
		days: '2022/11/24',
		flight: 'Bangkok (DMK) 10:50 -> Singapore 14:30',
		sleepName: 'The Seacare Hotel',
		sleepMapsUrl: 'https://goo.gl/maps/xZQ1SdgKBknwZW2c6',
		sleepBookingPlatform: 'Agoda',
	},
	{
		days: '2022/11/25 -> 2022/11/27',
		city: 'Singapore',
		sleepName: 'The Seacare hotel',
		sleepMapsUrl: 'https://goo.gl/maps/xZQ1SdgKBknwZW2c6',
		sleepBookingPlatform: 'Agoda',
	},
	{
		days: '2022/11/28',
		city: 'Singapore',
		sleepName: 'Marina Bay Sands',
		sleepMapsUrl: 'https://goo.gl/maps/VYyy6C8m2bRksJuBA',
		sleepBookingPlatform: 'Sito web Hotel',
	},
	{
		days: '2022/11/29',
		flight: 'Singapore 17:10 -> Bangkok (DMK) 18:40',
		sleepName: 'BTS Frontdoor Siam Platinum',
		sleepMapsUrl: 'https://www.airbnb.it/rooms/8507929',
		sleepBookingPlatform: 'Airbnb',
	},
	{
		days: '2022/11/30 -> 2022/12/06',
		city: 'Bangkok',
		sleepName: 'BTS Frontdoor Siam Platinum',
		sleepMapsUrl: 'https://www.airbnb.it/rooms/8507929',
		sleepBookingPlatform: 'Airbnb',
	},
	{
		days: '2022/12/07',
		train: 'Bangkok 19:35 -> Chiang Mai 08:40',
		sleepName: 'Night train #13',
		sleepMapsUrl: 'https://www.train36.com/train-13-timetable-thailand.html',
	},
	{
		days: '2022/12/08 -> 2022/12/14',
		city: 'Chiang Mai 08:40',
		sleepName: 'Truly Condo',
		sleepMapsUrl: 'https://www.airbnb.it/rooms/16047285',
		sleepBookingPlatform: 'Airbnb',
	},
	{
		days: '2022/12/15',
		train: 'Chiang Mai 17:00 -> Bangkok 06:15',
		sleepName: 'Night train #14',
		sleepMapsUrl: 'https://www.train36.com/train-13-timetable-thailand.html',
	},
	{
		days: '2022/12/16',
		city: 'Bangkok 06:15',
		sleepName: 'Akara Hotel Bangkok',
		sleepMapsUrl: 'https://goo.gl/maps/7r3k8GxP3MytPVq17',
		sleepBookingPlatform: 'Agoda',
	},
	{
		days: '2022/12/17',
		flight: 'Bangkok (BKK) 13:20 -> Londra (GTW) 19:35',
		sleepName: 'Aereo',
	},
	{
		days: '2022/12/18 -> 2022/12/19',
		city: 'Londra',
		sleepName: 'Casa Francesco',
	},
	{
		days: '2022/12/20',
		flight: 'Londra (GTW) 15:10 -> Roma (FCO) 18:40',
		sleepName: 'Casa Roma',
	},
]