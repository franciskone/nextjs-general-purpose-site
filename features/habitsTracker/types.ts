export type ActivityType = string

export type CommonHealthinessScore =
	| 'veryBad'
	| 'bad'
	| 'normal'
	| 'good'
	| 'veryGood'

export type CmsHealthinessScore = CommonHealthinessScore
	| null

export type HealthinessScore = CommonHealthinessScore
	| 'noScore'

export type CmsActivity = {
	place: string
	mood: CommonHealthinessScore
	moodDescription: string | null
	start: string
	end: string | null
	type: ActivityType
	description: string | null
	score: CmsHealthinessScore
}

export type Activity = CmsActivity & {duration: number | null}

export type ActivitiesListByDate = Record<string, Activity[]>