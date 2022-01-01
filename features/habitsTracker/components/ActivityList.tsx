import React from 'react'
import type {FC} from 'react'
import {Activity, HealthinessScore} from '../types'
import {Box, HStack, VStack, Text, Badge} from '@chakra-ui/react';
import {
	CheckmarkCircleIcon,
	CheckmarkDoneCircleIcon,
	CloseCircleIcon,
	RemoveCircleIcon,
} from 'chakra-ui-ionicons';
import type { IconProps } from "@chakra-ui/icon";
import { format } from 'date-fns';

export type ActivityListProps = {
	list: Activity[]
}

const activityScoreStyles: Record<HealthinessScore, {
	color: string,
	Icon: FC<IconProps>,
}> = {
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
		color: 'teal',
		Icon: CheckmarkCircleIcon,
	},
	veryGood: {
		color: 'green',
		Icon: CheckmarkDoneCircleIcon,
	},
}

const dateFormat = 'yyyy-MM-dd H:mm'
const ActivityItem: FC<Activity> = ({start, end, type, description, score}) => {
	const { color, Icon } = activityScoreStyles[score]
	const bgColor = `${color}.200`
	const fgColor = `${color}.500`
	const badgeBgColor = `${color}.300`
	
	const startDate = format(new Date(start), dateFormat)
	const endDate = format(new Date(end), dateFormat)
	
	return (
		<Box
			paddingY={2}
			paddingX={3}
			borderRadius={5}
			bgColor={bgColor}
			borderColor={fgColor}
			borderWidth={2}
		>
			<HStack>
				<Icon color={fgColor} w={5} h={5} />
				<VStack alignItems="start">
					<Badge bg={badgeBgColor}>
						<Text fontSize='2xl'>{type}</Text>
					</Badge>
					<Text fontSize='md'>{startDate} -> {endDate}</Text>
					<p>{description}</p>
				</VStack>
			</HStack>
		</Box>
	)
}

export const ActivityList: FC<ActivityListProps> = ({list}) => {
	return <VStack
		paddingY={2}
		alignItems="stretch"
		spacing={2}
	>
		{list.map(item => <ActivityItem {...item} />)}
	</VStack>
}