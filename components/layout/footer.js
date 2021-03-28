import { AppBar, Container, Toolbar, Typography, Box } from '@material-ui/core';

function FooterPage() {
	return (
		<Box m={0} p={0}>
			{' '}
			<AppBar elevation={0} position="static" color="primary">
				<Container maxWidth="md">
					<Toolbar>
						<Typography variant="body1" color="inherit">
							© 2021 Next Blog create with Material UI
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}

export default FooterPage;
