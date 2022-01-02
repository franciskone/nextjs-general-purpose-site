import {gql} from '@apollo/client';
import type {NextPage} from 'next'
import Head from 'next/head'
import {HabitsTrackerService} from "../services";
import {ActivitiesListByDate, CmsActivity} from "../types";
import {ActivityListByDate} from "../components/ActivityListByDate";
import {activitiesListByDate} from "../utils/activitiesUtils";

type HabitsTrackerIndexProps = {
	daysActivities: ActivitiesListByDate
}

const HabitsTrackerIndex: NextPage<HabitsTrackerIndexProps> = ({daysActivities}) => {
	
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Habits tracker Summary"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<main>
				<ActivityListByDate daysActivities={daysActivities}/>
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
					}
				}
			`
    }
  )
	
	debugger
	return {
		props: {
			daysActivities: activitiesListByDate(activities)
		}, // will be passed to the page component as props
	}
}
