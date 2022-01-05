export type CmsActivityType = string
export type CmsPlace = string
export type CmsDateAndTime = string

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
	place: CmsPlace
	mood: CommonHealthinessScore
	moodDescription: string | null
	start: CmsDateAndTime
	end: CmsDateAndTime | null
	type: CmsActivityType
	description: string | null
	score: CmsHealthinessScore
}

export type CmsSleep = {
	sleepPlace: CmsPlace
	preSleepMoodScore: CommonHealthinessScore | null
	preSleepActivity: CmsActivityType | null
	goToSleepTime: CmsDateAndTime | null
	usedNosePlaster: boolean | null
	usedMelatonine: boolean | null
	sleepQuality: CmsHealthinessScore | null
	wakeUpTime: CmsDateAndTime | null
}

export type Activity = CmsActivity & {duration: number | null}
export type ActivityFiltersType =
	| 'all'
	| 'allFood'
	| 'sport'
	| 'allRelax'
	| 'work'
export type Sleep = CmsSleep & {sleepDuration: number | null}

export type ActivitiesListByDate = Record<string, Activity[]>
export type SleepsListByDate = Record<string, Sleep>