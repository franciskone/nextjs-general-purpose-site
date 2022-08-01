export type DaySlice =
	| 'colazione'
	| 'mattina'
	| 'pranzo'
	| 'pomeriggio'
	| 'sera'

export type Item = {
	name: string
	mapsUrl?: string
	description?: string
	infos?: InfoItem[]
	url?: string
}

export type Event = Item & {
	start?: string
	end?: string
	when?: DaySlice
}

export type InfoItem = {
	text: string
	url?: string
}

export type City = Item & {
	firstDay: string
	lastDay: string
	events?: Event[]
}

export type Travel = Item & {
	cities: City[]
}