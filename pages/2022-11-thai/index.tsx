import {Box, Container, Button, Divider, Heading, HStack, Link, Stack, Text} from "@chakra-ui/react";
import type {NextPage} from "next";
import { AirplaneIcon, BedIcon, BookIcon, MapIcon, TrainIcon } from 'chakra-ui-ionicons';
import {thaiTravelData} from "./data";

const Page: NextPage = () => {
	const iconColor = 'gray.600'
	return (
		<Container>
			<Heading as='h1' size='xl' noOfLines={1}>
				Thailandia 2022
			</Heading>
			<Divider marginY={3} color="gray.500"/>
			{thaiTravelData.map(({days, city, flight, train, sleepName, sleepMapsUrl, sleepBookingPlatform}) => (
				<Box paddingTop={2} >
					<Box padding={2} bgColor="gray.200" borderRadius={5}>
						<Heading as='h2' size='lg' noOfLines={1}>{days}</Heading>
					</Box>
					<Stack paddingX={2} paddingY={3} divider={<Divider />}>
						{train &&
	            <HStack>
								<TrainIcon w={8} h={8} color={iconColor} />
	              <Text fontSize='2xl'>{train}</Text>
	            </HStack>
						}
						{flight &&
            <HStack>
              <AirplaneIcon w={8} h={8} color={iconColor} />
              <Text fontSize='2xl'>{flight}</Text>
            </HStack>
						}
						{city &&
	            <HStack>
                <MapIcon w={8} h={8} color={iconColor} />
	              <Text fontSize='2xl'>{city}</Text>
	            </HStack>
						}
						<HStack>
							<BedIcon w={8} h={8} color={iconColor} />
							{sleepMapsUrl
								? <Button colorScheme="blue">
										<Link href={sleepMapsUrl} isExternal fontSize='2xl'>{sleepName}</Link>
									</Button>
								: <Text fontSize='2xl'>{sleepName}</Text>
							}
						</HStack>
						{sleepBookingPlatform &&
								<HStack>
                  <BookIcon w={8} h={8} color={iconColor} />
									<Text fontSize='2xl'>{sleepBookingPlatform}</Text>
								</HStack>
						}
					</Stack>
				</Box>
			))}
		</Container>
	)
}

export default Page