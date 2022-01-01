import {gql} from '@apollo/client';
import type {NextPage} from 'next'
import Head from 'next/head'
import {HabitsTrackerService} from "../services";
import {Activity} from "../types";
import {ActivityList} from "../components/ActivityList";


type HabitsTrackerIndexProps = {
	activities: Activity[]
}

const HabitsTrackerIndex: NextPage<HabitsTrackerIndexProps> = ({activities}) => {
	
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Habits tracker Summary"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<main>
				<ActivityList list={activities}/>
			</main>
		</div>
	)
}

export default HabitsTrackerIndex

export async function getServerSideProps() {
  const {data: {activities}} = await HabitsTrackerService.query<{ activities: Activity[] }>(
		{
      query: gql`
				query Activities {
					activities {
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
		props: {activities}, // will be passed to the page component as props
	}
}
