export type ActivityType = string

export type HealthinessScore =
| 'veryBad'
| 'bad'
| 'normal'
| 'good'
| 'veryGood'

export type Activity = {
	start: string
	end: string | null
	type: ActivityType
	description: string | null
	score: HealthinessScore | null
}