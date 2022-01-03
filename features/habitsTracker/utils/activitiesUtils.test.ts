import {activitiesListByDate, sleepsListByDate} from "./activitiesUtils"
import {ActivitiesListByDate, CmsActivity, CmsSleep, SleepsListByDate} from "../types";

describe('activitiesUtils', () => {
	it('activitiesListByDate', () => {
		const inputList: CmsActivity[] = [
			{
				"start": "2022-01-01T13:30:00+00:00",
				"end": "2022-01-01T13:35:00+00:00",
				"type": "breakfast",
				"description": "Solo un mandarino perché c'era la polenta per pranzo",
				"score": "normal",
				"place": "ItalyHome",
				"mood": "good",
				"moodDescription": "test",
			},
			{
				"start": "2022-01-01T14:00:00+00:00",
				"end": "2022-01-01T14:45:00+00:00",
				"type": "lunch",
				"description": "Pranzo di capodanno. Polenta e spuntature di maiale e mezzo bicchiere di vino rosso.",
				"score": "bad",
				"place": "ItalyHome",
				"mood": "good",
				"moodDescription": "test",
			},
			{
				"start": "2022-01-02T15:00:00+00:00",
				"end": "2022-01-02T16:30:00+00:00",
				"type": "relax",
				"description": "Giocato con Bianca sul divano",
				"score": "veryGood",
				"place": "ItalyHome",
				"mood": "good",
				"moodDescription": "test",
			},
			{
				"start": "2022-01-02T16:31:00+00:00",
				"end": "2022-01-02T17:15:00+00:00",
				"type": "homeShower",
				"description": null,
				"score": "good",
				"place": "ItalyHome",
				"mood": "good",
				"moodDescription": "test",
			},
			{
				"start": "2022-01-03T17:45:00+00:00",
				"end": "2022-01-03T19:46:00+00:00",
				"type": "watchTv",
				"description": "Sceneggiato storia De Filippo con Mamma e Papà, mentre programmavo un sito di test con Next js",
				"score": "veryGood",
				"place": "ItalyHome",
				"mood": "good",
				"moodDescription": "test",
			},
			{
				"start": "2022-01-03T19:50:00+00:00",
				"end": "2022-01-03T20:15:00+00:00",
				"type": "hobbyWriteCode",
				"description": null,
				"score": "normal",
				"place": "ItalyHome",
				"mood": "good",
				"moodDescription": "test",
			},
			{
				"start": "2022-01-04T20:30:00+00:00",
				"end": null,
				"type": "relax",
				"description": "Costruisco il sito per questo gestionale mentre guardo la tv coi miei (In più ho fatto una chiamata con Maria Luisa)",
				"score": "good",
				"place": "ItalyHome",
				"mood": "good",
				"moodDescription": "test",
			},
		]
		
		const outputList: ActivitiesListByDate = {
			'2022-01-01': [
				{
					"start": "2022-01-01T13:30:00+00:00",
					"end": "2022-01-01T13:35:00+00:00",
					"duration": 300000,
					"type": "breakfast",
					"description": "Solo un mandarino perché c'era la polenta per pranzo",
					"score": "normal",
					"place": "ItalyHome",
					"mood": "good",
					"moodDescription": "test",
				},
				{
					"start": "2022-01-01T14:00:00+00:00",
					"end": "2022-01-01T14:45:00+00:00",
					"duration": 2700000,
					"type": "lunch",
					"description": "Pranzo di capodanno. Polenta e spuntature di maiale e mezzo bicchiere di vino rosso.",
					"score": "bad",
					"place": "ItalyHome",
					"mood": "good",
					"moodDescription": "test",
				},
			],
			'2022-01-02': [
				{
					"start": "2022-01-02T15:00:00+00:00",
					"end": "2022-01-02T16:30:00+00:00",
					"duration": 5400000,
					"type": "relax",
					"description": "Giocato con Bianca sul divano",
					"score": "veryGood",
					"place": "ItalyHome",
					"mood": "good",
					"moodDescription": "test",
				},
				{
					"start": "2022-01-02T16:31:00+00:00",
					"end": "2022-01-02T17:15:00+00:00",
					"duration": 2640000,
					"type": "homeShower",
					"description": null,
					"score": "good",
					"place": "ItalyHome",
					"mood": "good",
					"moodDescription": "test",
				},
			],
			'2022-01-03': [
				{
					"start": "2022-01-03T17:45:00+00:00",
					"end": "2022-01-03T19:46:00+00:00",
					"duration": 7260000,
					"type": "watchTv",
					"description": "Sceneggiato storia De Filippo con Mamma e Papà, mentre programmavo un sito di test con Next js",
					"score": "veryGood",
					"place": "ItalyHome",
					"mood": "good",
					"moodDescription": "test",
				},
				{
					"start": "2022-01-03T19:50:00+00:00",
					"end": "2022-01-03T20:15:00+00:00",
					"duration": 1500000,
					"type": "hobbyWriteCode",
					"description": null,
					"score": "normal",
					"place": "ItalyHome",
					"mood": "good",
					"moodDescription": "test",
				},
			],
			'2022-01-04': [
				{
					"start": "2022-01-04T20:30:00+00:00",
					"end": null,
					"duration": null,
					"type": "relax",
					"description": "Costruisco il sito per questo gestionale mentre guardo la tv coi miei (In più ho fatto una chiamata con Maria Luisa)",
					"score": "good",
					"place": "ItalyHome",
					"mood": "good",
					"moodDescription": "test",
				},
			],
		}
		
		expect(activitiesListByDate(inputList)).toEqual(outputList)
	})
	
	it('sleepsListByDate', () => {
		// TODO Franciskone: fix test (weirdly not working)
		const inputList: CmsSleep[] = [
			{
				"sleepPlace": "ItalyParents",
				"preSleepMoodScore": "good",
				"preSleepActivity": "watchTv",
				"goToSleepTime": "2022-01-01T05:30:17.75+00:00",
				"usedNosePlaster": false,
				"usedMelatonine": null,
				"sleepQuality": "veryGood",
				"wakeUpTime": null
			},
			{
				"sleepPlace": "ItalyParents",
				"preSleepMoodScore": "veryGood",
				"preSleepActivity": "watchTv",
				"goToSleepTime": "2022-01-02T02:25:00+00:00",
				"usedNosePlaster": false,
				"usedMelatonine": true,
				"sleepQuality": "good",
				"wakeUpTime": "2022-01-02T10:01:00+00:00"
			},
			{
				"sleepPlace": "ItalyParents",
				"preSleepMoodScore": "good",
				"preSleepActivity": "watchTv",
				"goToSleepTime": null,
				"usedNosePlaster": false,
				"usedMelatonine": null,
				"sleepQuality": "veryGood",
				"wakeUpTime": '2022-01-03T12:30:17.75+00:00'
			}
		]
		
		const outputList: SleepsListByDate = {
			'2022-01-02': {
				"sleepPlace": "ItalyParents",
				"preSleepMoodScore": "veryGood",
				"preSleepActivity": "watchTv",
				"goToSleepTime": "2022-01-02T02:25:00+00:00",
				"usedNosePlaster": false,
				"usedMelatonine": true,
				"sleepQuality": "good",
				"wakeUpTime": "2022-01-02T10:01:00+00:00",
				'sleepDuration': 27360000,
			},
			'2021-01-03': {
				"sleepPlace": "ItalyParents",
				"preSleepMoodScore": "good",
				"preSleepActivity": "watchTv",
				"goToSleepTime": null,
				"usedNosePlaster": false,
				"usedMelatonine": null,
				"sleepQuality": "veryGood",
				"wakeUpTime": '2022-01-03T12:30:17.75+00:00',
				'sleepDuration': null,
			}
		}

		expect(sleepsListByDate(inputList)).toEqual(outputList)
	})
})