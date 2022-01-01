import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
	watchQuery: {
		fetchPolicy: 'network-only',
		errorPolicy: 'ignore',
	},
	query: {
		fetchPolicy: 'network-only',
		errorPolicy: 'all',
	},
}

export const HabitsTrackerService = new ApolloClient({
	uri: process.env.HABITS_TRACKER_CMS_CONTENT_URL,
	headers: {
		authorization: `Bearer ${process.env.HABITS_TRACKER_CMS_CONTENT_API_KEY}`,
	},
	cache: new InMemoryCache(),
	defaultOptions,
});

