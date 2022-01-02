import {activitiesListByDate} from "./activitiesUtils"
import {CmsActivity} from "../types";

describe('activitiesUtils', () => {
	it('activitiesListByDate', () => {
		const inputList: CmsActivity[] = [
			{
				"start": "2022-01-01T13:30:00+00:00",
				"end": "2022-01-01T13:35:00+00:00",
				"type": "breakfast",
				"description": "Solo un mandarino perché c'era la polenta per pranzo",
				"score": "normal"
			},
			{
				"start": "2022-01-01T14:00:00+00:00",
				"end": "2022-01-01T14:45:00+00:00",
				"type": "lunch",
				"description": "Pranzo di capodanno. Polenta e spuntature di maiale e mezzo bicchiere di vino rosso.",
				"score": "bad"
			},
			{
				"start": "2022-01-02T15:00:00+00:00",
				"end": "2022-01-02T16:30:00+00:00",
				"type": "relax",
				"description": "Giocato con Bianca sul divano",
				"score": "veryGood"
			},
			{
				"start": "2022-01-02T16:31:00+00:00",
				"end": "2022-01-02T17:15:00+00:00",
				"type": "homeShower",
				"description": null,
				"score": "good"
			},
			{
				"start": "2022-01-03T17:45:00+00:00",
				"end": "2022-01-03T19:46:00+00:00",
				"type": "watchTv",
				"description": "Sceneggiato storia De Filippo con Mamma e Papà, mentre programmavo un sito di test con Next js",
				"score": "veryGood"
			},
			{
				"start": "2022-01-03T19:50:00+00:00",
				"end": "2022-01-03T20:15:00+00:00",
				"type": "hobbyWriteCode",
				"description": null,
				"score": "normal"
			},
			{
				"start": "2022-01-04T20:30:00+00:00",
				"end": null,
				"type": "relax",
				"description": "Costruisco il sito per questo gestionale mentre guardo la tv coi miei (In più ho fatto una chiamata con Maria Luisa)",
				"score": "good"
			},
		]
		
		const outputList = {
			'2022-01-01': [
				{
					"start": "2022-01-01T13:30:00+00:00",
					"end": "2022-01-01T13:35:00+00:00",
					"duration": 300000,
					"type": "breakfast",
					"description": "Solo un mandarino perché c'era la polenta per pranzo",
					"score": "normal"
				},
				{
					"start": "2022-01-01T14:00:00+00:00",
					"end": "2022-01-01T14:45:00+00:00",
					"duration": 2700000,
					"type": "lunch",
					"description": "Pranzo di capodanno. Polenta e spuntature di maiale e mezzo bicchiere di vino rosso.",
					"score": "bad"
				},
			],
			'2022-01-02': [
				{
					"start": "2022-01-02T15:00:00+00:00",
					"end": "2022-01-02T16:30:00+00:00",
					"duration": 5400000,
					"type": "relax",
					"description": "Giocato con Bianca sul divano",
					"score": "veryGood"
				},
				{
					"start": "2022-01-02T16:31:00+00:00",
					"end": "2022-01-02T17:15:00+00:00",
					"duration": 2640000,
					"type": "homeShower",
					"description": null,
					"score": "good"
				},
			],
			'2022-01-03': [
				{
					"start": "2022-01-03T17:45:00+00:00",
					"end": "2022-01-03T19:46:00+00:00",
					"duration": 7260000,
					"type": "watchTv",
					"description": "Sceneggiato storia De Filippo con Mamma e Papà, mentre programmavo un sito di test con Next js",
					"score": "veryGood"
				},
				{
					"start": "2022-01-03T19:50:00+00:00",
					"end": "2022-01-03T20:15:00+00:00",
					"duration": 1500000,
					"type": "hobbyWriteCode",
					"description": null,
					"score": "normal"
				},
			],
			'2022-01-04': [
				{
					"start": "2022-01-04T20:30:00+00:00",
					"end": null,
					"duration": null,
					"type": "relax",
					"description": "Costruisco il sito per questo gestionale mentre guardo la tv coi miei (In più ho fatto una chiamata con Maria Luisa)",
					"score": "good"
				},
			],
		}
		
		expect(activitiesListByDate(inputList)).toEqual(outputList)
	})
})