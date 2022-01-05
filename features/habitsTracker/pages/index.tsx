import {gql} from '@apollo/client';
import type {GetServerSidePropsContext, NextPage} from 'next'
import Head from 'next/head'
import {HabitsTrackerService} from "../services";
import {ActivityFiltersType, CmsActivity, CmsSleep} from "../types";
import {ActivityListByDate, Days} from "../components/ActivityListByDate";
import {activitiesListByDate, sleepsListByDate} from "../utils/activitiesUtils";
import {activitiesFilters, isActivityInFilter} from "../utils/activityFilters";
import {ActivityFilterBar, ActivityFilterBarProps} from "../components/ActivityFilterBar";
import {useRouter} from "next/router";

type HabitsTrackerIndexProps = {
	days: Days
}

const HabitsTrackerIndex: NextPage<HabitsTrackerIndexProps> = ({days}) => {
	const {pathname} = useRouter()
	const activityFilters: ActivityFilterBarProps['filters'] = [
		{
			value: 'all',
			label: 'All',
			color: 'gray'
		},
		{
			value: 'work',
			label: 'Work',
			color: 'blue'
		},
		{
			value: 'allFood',
			label: 'Food',
			color: 'green'
		},
		{
			value: 'sport',
			label: 'Sport',
			color: 'cyan'
		},
		{
			value: 'allRelax',
			label: 'Relax',
			color: 'purple'
		},
	]
	
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Habits tracker Summary"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<main>
				<ActivityFilterBar filters={activityFilters} path={pathname} />
				<ActivityListByDate days={days} />
			</main>
		</div>
	)
}

export default HabitsTrackerIndex
export async function getServerSideProps(context: GetServerSidePropsContext) {
	const {query: { filter }} = context
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
	
	const daysActivities = filter
		? activitiesListByDate(activities.filter((activity) => isActivityInFilter(activity.type, filter as ActivityFiltersType)))
		: activitiesListByDate(activities)
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
