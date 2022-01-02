import {differenceInMilliseconds, format} from "date-fns";
import {ActivitiesListByDate, CmsActivity} from "../types";

export const activitiesListByDate = (activities: CmsActivity[]): ActivitiesListByDate => {
	const accInitValue: ActivitiesListByDate = {}
	
	const output = activities.reduce((acc, activity) => {
		const {start, end} = activity
		const date = format(new Date(start), 'yyyy-MM-dd')
		
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