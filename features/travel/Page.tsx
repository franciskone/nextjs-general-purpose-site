import {useRouter} from "next/router";
import {travels} from "./data";
import {FC} from "react";
// @ts-ignore
import {City, Travel, InfoItem, Event} from "./types";
import {NextPage} from "next";
import {Button, Heading, ListItem, UnorderedList, Link, Text} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

const MapsLink: FC<{url: string}> = ({url}) => (<Button><a href={url} target="_blank">mappa</a></Button>)

const InfosUI: FC<{ infos: InfoItem[] }> = ({infos}) => (
	<UnorderedList>
		{infos?.map(({url, text}) => (
			<ListItem>
				<>{url ? (<Link href={url} isExternal>{text} <ExternalLinkIcon mx='2px' /></Link>) : text}</>
			</ListItem>)
		)}
	</UnorderedList>
)

const IntervalUI: FC<{ start: string, end:string}> = ({start, end}) => (
	<Text fontSize='md'>
		{Intl.DateTimeFormat('it-IT').format(new Date(start))}
		{' -> '}
		{Intl.DateTimeFormat('it-IT').format(new Date(end))}
	</Text>
)

const EventUI: FC<{events: Event[]}> = ({events}) => {

	return <>
		{
			events.map(({ name, mapsUrl, description, infos, when, start, end }) => (
			<>
				<Heading as='h3' size='lg' noOfLines={1}>
					{name} - {when} {mapsUrl && <MapsLink url={mapsUrl}/>}
				</Heading>
				{start && end && <IntervalUI start={start} end={end} />}
				{description && <Text fontSize='md'>{description}</Text>}
				{infos && <InfosUI infos={infos} />}
			</>
			))
		}
	</>
}

const CityUI: FC<City> = ({name, mapsUrl, firstDay, lastDay, infos, description, events}) => {
	return (
		<>
			<Heading as='h2' size='lg' noOfLines={1}>
				{name} {mapsUrl && <MapsLink url={mapsUrl}/>}
			</Heading>
			{firstDay && lastDay && <IntervalUI start={firstDay} end={lastDay} />}
			{description && <p>{description}</p>}
			{infos && <InfosUI infos={infos} />}
			{events && <EventUI events={events}/>}
		</>
	)
}

const TravelUI: FC<Travel> = ({
	name,
  description,
  mapsUrl,
  infos,
  url,
  cities
}) => {
	
	return (
		<>
			<Heading as='h1' size='2xl' noOfLines={1}>
				{name}
			</Heading>
			{infos && <InfosUI infos={infos} />}
			{cities?.map((city) => <CityUI {...city} />)}
		</>
	)
}
// @ts-ignore
export const Travel: NextPage = () => {
	const router = useRouter()
	const {travelid} = router.query
	const data = travels[travelid as string]
	
	return (
		<div>
			{data && <TravelUI {...data} />}
		</div>
	)
}