import {HealthinessScore, DayData} from "../types";

const scoreValue: Record<HealthinessScore, -2 | -1 | 0 | 1 | 2> = {
	veryBad: -2,
	bad: -1,
	normal: 0,
	good: 1,
	veryGood: 2,
}

export const dailyOverallScore = (day: DayData): HealthinessScore => {
	// TODO Franciskone: feature ADD dailyOverallScore to the page
	// 1. sum all the activity scores
	// 2. sum the overall score of the sleep
	// 3. give a bonus if done Workout, (example: multiply score * 1.5)
	// 4. divide by activities.length + 1 (sleep score)
	
	// return the HealthinessScore related to the value
	return 'good'
}