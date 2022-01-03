import {differenceInMilliseconds, format} from "date-fns";
import {ActivitiesListByDate, CmsActivity, CmsSleep, SleepsListByDate} from "../types";

const formatDate = (fullDate: string): string => format(new Date(fullDate), 'yyyy-MM-dd')

export const activitiesListByDate = (activities: CmsActivity[]): ActivitiesListByDate => {
	const accInitValue: ActivitiesListByDate = {}
	
	const output = activities.reduce((acc, activity) => {
		const {start, end} = activity
		const date = formatDate(start)
		
		if (!acc[date]) acc[date] = []
		
		const duration = end
			? differenceInMilliseconds(new Date(end), new Date(start))
			: null
		
		acc[date].push({
			...activity,
			duration,
		})
		
		return acc
	}, accInitValue)
	
	return output
}

export const sleepsListByDate = (sleeps: CmsSleep[]): SleepsListByDate => {
	const initAccumulator: SleepsListByDate = {}
	
	const output: SleepsListByDate = sleeps.reduce((acc, sleep) => {
		const {wakeUpTime, goToSleepTime} = sleep
		if(!wakeUpTime) return acc
		
		const date = formatDate(wakeUpTime)
		
		const sleepDuration = goToSleepTime
			? differenceInMilliseconds(new Date(wakeUpTime), new Date(goToSleepTime))
			: null
		
		acc[date] = {
			...sleep,
			sleepDuration,
		}
		
		return acc
	}, initAccumulator)
	
	return output
}