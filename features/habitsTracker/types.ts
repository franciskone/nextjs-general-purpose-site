export type ActivityType = string

export type HealthinessScore =
| 'veryBad'
| 'bad'
| 'normal'
| 'good'
| 'veryGood'

export type Activity = {
	start: string
	end: string
	type: ActivityType
	description: string
	score: HealthinessScore
}