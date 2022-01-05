import React from 'react'
import type {FC} from 'react'
import {ActivityFiltersType} from "../types";
import {Button, HStack, Link} from "@chakra-ui/react";
import {default as NextLink} from "next/link";

export type ActivityFilterBarProps = {
	filters: {
		value: ActivityFiltersType,
		label: string,
		color: string
	}[],
	path: string
}

export const ActivityFilterBar: FC<ActivityFilterBarProps> = ({filters, path}) => {
	// TODO Franciskone: tech debt -> extract the NextLink + Chakra Link in a dedicated component at project levels
	return (
		<HStack>
			{filters.map(({ value, label, color }) => (
				<NextLink
					href={`${path}?filter=${value}`}
					passHref
					key={`${path}?filter=${value}`}
				>
					<Button colorScheme={color}>
						<Link><b>{label}</b></Link>
					</Button>
				</NextLink>
			))}
		</HStack>
	)
}