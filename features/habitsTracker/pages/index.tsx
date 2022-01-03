import {gql} from '@apollo/client';
import type {NextPage} from 'next'
import Head from 'next/head'
import {HabitsTrackerService} from "../services";
import {CmsActivity, CmsSleep} from "../types";
import {ActivityListByDate, Days} from "../components/ActivityListByDate";
import {activitiesListByDate, sleepsListByDate} from "../utils/activitiesUtils";

type HabitsTrackerIndexProps = {
	days: Days
}

const HabitsTrackerIndex: NextPage<HabitsTrackerIndexProps> = ({days}) => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Habits tracker Summary"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<main>
				<ActivityListByDate days={days} />
			</main>
		</div>
	)
}

export default HabitsTrackerIndex

export async function getServerSideProps() {
  const {data: {activities}} = await HabitsTrackerService.query<{ activities: CmsActivity[] }>(
		{
      query: gql`
				query Activities {
					activities(orderBy: start_DESC) {
						start
						end
						type
						description
						score
						mood
						moodDescription
						place
					}
				}
			`
    }
  )
  
  const {data: { sleeps }} = await HabitsTrackerService.query<{ sleeps: CmsSleep[] }>(
    {
      query: gql`
				query Sleeps {
					sleeps(orderBy: wakeUpTime_DESC) {
						sleepPlace
						preSleepMoodScore
						preSleepActivity
						goToSleepTime
						usedNosePlaster
						usedMelatonine
						sleepQuality
						wakeUpTime
					}
				}
			`
    }
  )
	
	const daysActivities = activitiesListByDate(activities)
	const	daysSleeps = sleepsListByDate(sleeps)
	
	const days: Days = {}
	
	for(const day in daysActivities) {
		if(!days[day]) days[day] = {}
		days[day]['activities'] = daysActivities[day]
	}
	
	for(const day in daysSleeps) {
		if(!days[day]) days[day] = {}
		days[day]['sleep'] = daysSleeps[day]
	}
	
	return {
		props: {
			days
		},
	}
}
