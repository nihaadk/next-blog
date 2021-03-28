import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	logo: {
		flexGrow: 1,
		fontWeight: 'bold',
		cursor: 'pointer'
	}
}));

function Navigation() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Link href="/">
						<Typography variant="h4" className={classes.logo}>
							Next Blog
						</Typography>
					</Link>

					<Link href="/posts">
						<Button color="inherit">Post</Button>
					</Link>
					<Link href="/contact">
						<Button color="inherit">Contact</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navigation;
