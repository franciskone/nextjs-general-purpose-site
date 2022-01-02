import React from 'react'
import type {FC} from 'react'
import {ActivitiesListByDate, Activity, CmsActivity, HealthinessScore} from '../types'
import {Box, HStack, VStack, Text, Badge, Heading, StackDivider} from '@chakra-ui/react';
import {
	CheckmarkCircleIcon,
	CheckmarkDoneCircleIcon,
	CloseCircleIcon,
	RemoveCircleIcon,
} from 'chakra-ui-ionicons';
import type {IconProps} from "@chakra-ui/icon";
import {format} from 'date-fns';

export type ActivitiesListByDateProps = {
	daysActivities: ActivitiesListByDate
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

const ActivityItemDateFormat = 'H:mm'

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
	
	const { color: moodColor, Icon: MoodIcon } = activityScoreStyles[mood]
	const moodBadgeBgColor = `${moodColor}.300`
	const moodBadgeFgColor = `${moodColor}.500`
	
	// TODO Franciskone: fix bug
	// check if it is working properly
	const startDate = format(new Date(start), ActivityItemDateFormat)
	
	// TODO Franciskone: fix bug
	// formattedDuration is not working, it's adding one hour to all durations
	const formattedDuration = duration !== null
		? format(duration, "H'h':mm'm'")
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

export const ActivityListByDate: FC<ActivitiesListByDateProps> = ({daysActivities}) => {
	const daysData: [string, Activity[]][] = Object.entries(daysActivities)
	
	return (
		<VStack
			paddingY={2}
			alignItems="stretch"
			spacing={6}
		>
			{daysData.map(([day, activities]) => (
				<VStack
					key={day}
					alignItems="stretch"
					divider={<StackDivider borderColor='gray.200'/>}
					spacing={4}
				>
					<Heading as='h2' size='lg' isTruncated>
						{day}
					</Heading>
					<VStack alignItems="stretch" spacing={4}>
						{activities.map(activity => (<ActivityItem {...activity} key={`${activity.start}__${activity.type}`}/>))}
					</VStack>
				</VStack>
			))}
		</VStack>
	)
}