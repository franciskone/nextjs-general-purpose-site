import { dailyOverallScore } from "./dailyOverallScore"
import {
	CmsActivityType,
	CmsDateAndTime,
	CmsHealthinessScore,
	CmsPlace,
	CommonHealthinessScore,
	DayData, HealthinessScore
} from "../types";

describe('dailyOverallScore', () => {
    it('calculates the score correctly', () => {
    	const testDay: DayData = {
    		sleep: {
			    // sleepPlace: CmsPlace
			    // preSleepMoodScore: CommonHealthinessScore | null
			    // preSleepActivity: CmsActivityType | null
			    // goToSleepTime: CmsDateAndTime | null
			    // usedNosePlaster: boolean | null
			    // usedMelatonine: boolean | null
			    // sleepQuality: CmsHealthinessScore | null
			    // wakeUpTime:
			    // sleepDuration: 7 *  3600 * 1000 // 7 hours
		    },
		    activities: [],
	    }
	    const expectedScore: HealthinessScore = 'good'
	    
      expect(dailyOverallScore(testDay)).toBe(expectedScore)
    })
 })