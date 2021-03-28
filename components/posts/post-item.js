import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 200,
		width: 320
	}
});

function PostItem(props) {
	const { title, image, excerpte, date, slug } = props.post;

	const classes = useStyles();

	const formatDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<Image src="/img/me.jpg" title={title} width={320} height={250} />
				{/* <CardMedia className={classes.media} image="img/me.jpg" /> */}
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{formatDate}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link href="/">
					<Button size="small" color="primary">
						Show
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}

export default PostItem;
