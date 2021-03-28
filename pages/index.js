import React, { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { Box } from '@material-ui/core';

const DUMMY = [
	{
		slug: 'Start with nextjs',
		title: 'test',
		image: 'me.jpg',
		excerpt: 'TEST ',
		date: '2022-02-10'
	},
	{
		slug: 'Start with nextjs',
		title: 'test',
		image: 'me.jpg',
		excerpt: 'TEST ',
		date: '2022-02-10'
	},
	{
		slug: 'Start with nextjs',
		title: 'test',
		image: 'me.jpg',
		excerpt: 'TEST ',
		date: '2022-02-10'
	}
];

export default function Home() {
	return (
		<Fragment>
			<Box bgcolor="primary.main" color="primary.contrastText">
				<Hero />
			</Box>
			<Box>
				<FeaturedPosts posts={DUMMY} />
			</Box>
		</Fragment>
	);
}
