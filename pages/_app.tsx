import {Box, ChakraProvider, HStack, Link} from '@chakra-ui/react'
import type {AppProps} from 'next/app'
import {useRouter} from 'next/router'
import { default   as NextLink } from 'next/link'

import type { FC } from 'react'

type Link = {
	path: string
	label: string
}

type Nav = {
	links: Link[]
	currentPath: string
}
const Nav: FC<Nav> = ({ links, currentPath }) => (
	<nav>
		<HStack bg="gray.100" p={4} borderRadius={5}>
			{links.filter(link => link.path !== currentPath).map(({path, label}) => (
				<NextLink href={path} passHref key={path}>
					<Link><b>{label}</b></Link>
				</NextLink>
			))}
		</HStack>
	</nav>
)

const links: Link[] = [
	// {
	// 	label: 'Home',
	// 	path: '/',
	// },
	// {
	// 	label: 'Habits tracker',
	// 	path: '/habits-tracker',
	// },
	{
		label: 'Israele 2022',
		path: '/travel/2022-08-israel'
	}
]


function MyApp({Component, pageProps}: AppProps) {
	const {route} = useRouter()
	
	return (
		<ChakraProvider resetCSS>
			<Box>
				{/*<Nav links={links} currentPath={route} />*/}
				<Box paddingY={2}>
					{/* @ts-ignore */}
					<Component {...pageProps} />
				</Box>
			</Box>
		</ChakraProvider>
	)
}

export default MyApp