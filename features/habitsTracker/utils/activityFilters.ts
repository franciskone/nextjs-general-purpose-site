import {ActivityFiltersType} from "../types";

export const activitiesFilters: Record<ActivityFiltersType, string[] | null> = {
	all: null,
	work: ['work'],
	allFood: ['lunch', 'dinner', 'breakfast', 'food'],
	sport: ['swim', 'weightLifting', 'run', 'walk', 'yoga'],
	allRelax: [
		'readBook', 'watchTv', 'meditation',
		'videoGames', 'Oculus', 'nap',
		'relax', 'holiday', 'hobbyWriteCode'
	]
}

export const isActivityInFilter = (activityType: string, filter: ActivityFiltersType): boolean => {
	const filteredActivities = activitiesFilters[filter]
	return filteredActivities
		? filteredActivities.includes(activityType)
		: true
}