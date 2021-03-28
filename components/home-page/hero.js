import { Grid, Typography, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(30),
		height: theme.spacing(30)
	},
	title: {
		fontWeight: 'bold',
		align: 'center'
	},
	description: {
		align: 'center'
	}
}));

function Hero() {
	const classes = useStyles();
	return (
		<section>
			<Box py={18}>
				<Grid container direction="column-reverse" justify="flex-start" alignItems="center">
					<Box mt={4}>
						<Typography className={classes.title} variant="h2">
							Hi, I'm Nihad
						</Typography>
						<Typography className={classes.description} variant="h5">
							I blog about frontend development
						</Typography>
					</Box>
					<Avatar className={classes.large}>
						<Image src="/img/me.jpg" alt="Avatar" width={300} height={300} />
					</Avatar>
				</Grid>
			</Box>
		</section>
	);
}

export default Hero;
