import React from 'react'
import type {FC} from 'react'
import {ActivitiesListByDate, Activity, CmsActivity, HealthinessScore, Sleep, SleepsListByDate} from '../types'
import {Box, HStack, VStack, Text, Badge, Heading, StackDivider} from '@chakra-ui/react';
import {
	BandageIcon,
	BatteryChargingIcon,
	BedIcon,
	CheckmarkCircleIcon,
	CheckmarkDoneCircleIcon,
	CloseCircleIcon,
	EyedropIcon,
	EyeIcon,
	HeartIcon,
	RemoveCircleIcon,
	TimerIcon,
} from 'chakra-ui-ionicons';
import type {IconProps} from "@chakra-ui/icon";
import {compareDesc, format} from 'date-fns';

type Day = {
	sleep?: Sleep
	activities?: Activity[]
}
export type Days = Record<string, Day>

export type ActivitiesListByDateProps = {
	days: Days
}

const activityScoreStyles: Record<HealthinessScore, {
	color: string,
	Icon: FC<IconProps>,
}> = {
	noScore: {
		color: 'gray',
		Icon: CloseCircleIcon,
	},
	veryBad: {
		color: 'red',
		Icon: CloseCircleIcon,
	},
	bad: {
		color: 'orange',
		Icon: CloseCircleIcon,
	},
	normal: {
		color: 'yellow',
		Icon: RemoveCircleIcon,
	},
	good: {
		color: 'green',
		Icon: CheckmarkCircleIcon,
	},
	veryGood: {
		color: 'teal',
		Icon: CheckmarkDoneCircleIcon,
	},
}

const ActivityItemDateFormat = 'K:mm aaa'
const DurationDateFormat = "H'h':mm'm'"

const ActivityItem: FC<Activity> = ({
	                                    start,
	                                    end,
	                                    type,
	                                    description,
	                                    score,
	                                    duration,
	                                    mood,
	                                    moodDescription,
	                                    place,
                                    }) => {
	const scoreKey = score || 'noScore'
	const {color: scoreColor, Icon: ActivityIcon} = activityScoreStyles[scoreKey]
	const bgColor = `${scoreColor}.50`
	const fgColor = `${scoreColor}.500`
	const badgeBgColor = `${scoreColor}.300`
	
	const {color: moodColor, Icon: MoodIcon} = activityScoreStyles[mood]
	const moodBadgeBgColor = `${moodColor}.300`
	const moodBadgeFgColor = `${moodColor}.500`
	
	// TODO Franciskone: fix bug
	// check if it is working properly
	const startDate = format(new Date(start), ActivityItemDateFormat)
	
	// TODO Franciskone: fix bug
	// formattedDuration is not working, it's adding one hour to all durations
	const formattedDuration = duration !== null
		? format(duration, DurationDateFormat)
		: null
	
	return (
		<Box
			paddingY={2}
			paddingX={3}
			borderRadius={5}
			bgColor={bgColor}
			borderColor={fgColor}
			borderWidth={2}
		>
			<VStack alignItems="start">
				<HStack>
					<Badge bg={badgeBgColor} px={2} py={1} borderRadius={5}>
						<HStack spacing={1}>
							<ActivityIcon color={fgColor} w={5} h={5}/>
							<Text fontSize='lg'>{type}</Text>
						</HStack>
					</Badge>
					<Badge bg={moodBadgeBgColor} px={2} py={1} borderRadius={5}>
						<HStack spacing={1}>
							<MoodIcon color={moodBadgeFgColor} w={5} h={5}/>
							<Text fontSize='sm'>mood</Text>
						</HStack>
					</Badge>
				</HStack>
				<Text fontSize='md'>{place} - {startDate} {`(${formattedDuration})`}</Text>
				<p>{description}</p>
			</VStack>
		</Box>
	)
}

const SleepSummary: FC<Sleep> = ({
	                                 sleepPlace,
	                                 preSleepActivity,
	                                 goToSleepTime,
	                                 sleepDuration,
	                                 sleepQuality,
	                                 preSleepMoodScore,
	                                 usedNosePlaster,
	                                 usedMelatonine,
                                 }) => {
	// TODO Franciskone: fix bug
	// formattedDuration is not working, it's adding one hour to all durations
	const formattedDuration = sleepDuration !== null
		? format(sleepDuration, DurationDateFormat)
		: null
	
	const items = []
	
	if (goToSleepTime != null) items.push(<Box><BedIcon/>{` ${format(new Date(goToSleepTime), ActivityItemDateFormat)}`}
	</Box>)
	if (formattedDuration != null) items.push(<Box><TimerIcon/>{` ${formattedDuration}`}</Box>)
	if (preSleepActivity != null) items.push(<Box><EyeIcon/>{` ${preSleepActivity}`}</Box>)
	if (preSleepMoodScore != null) items.push(<Box><HeartIcon/>{` ${preSleepMoodScore}`}</Box>)
	if (sleepQuality != null) items.push(<Box><BatteryChargingIcon/>{` ${sleepQuality}`}</Box>)
	if (usedNosePlaster != null) items.push(<Box><BandageIcon/>{` ${usedNosePlaster ? 'sì' : 'no'}`}</Box>)
	if (usedMelatonine != null) items.push(<Box><EyedropIcon/>{` ${usedMelatonine ? 'sì' : 'no'}`}</Box>)
	
	return (
		<HStack wrap="nowrap">
			{items.map(item => (
				<Badge bg="gray.100" px={2} py={1} borderRadius={5}>
					<Text fontSize='lg'>{item}</Text>
				</Badge>
			))}
		</HStack>
	)
}

export const ActivityListByDate: FC<ActivitiesListByDateProps> = ({days}) => {
	const daysData: [string, Day][] = Object.entries(days)
	.sort(([firstDate], [secondDate]) => compareDesc(new Date(firstDate), new Date(secondDate)))
	
	return (
		<VStack
			paddingY={2}
			alignItems="stretch"
			spacing={6}
		>
			{daysData.map(([day, {sleep, activities}]) => (
				<VStack
					key={day}
					alignItems="stretch"
					divider={<StackDivider borderColor='gray.200'/>}
					spacing={4}
				>
					<VStack alignItems="stretch">
						<Heading as='h2' size='lg' isTruncated>
							{day}
						</Heading>
						{sleep && <SleepSummary {...sleep} />}
					</VStack>
					{activities &&
	          <VStack alignItems="stretch" spacing={4}>
	            <Heading as='h3' size='md' isTruncated>
	              Activities
	            </Heading>
							{activities.map(activity => (<ActivityItem {...activity} key={`${activity.start}__${activity.type}`}/>))}
	          </VStack>
					}
				</VStack>
			))}
		</VStack>
	)
}