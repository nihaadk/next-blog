import { Container, Box, CssBaseline } from '@material-ui/core';

function Layout(props) {
	return (
		<main>
			<Box m={0} p={0}>
				<Container disableGutters maxWidth={false}>
					{props.children}
				</Container>
			</Box>
		</main>
	);
}

export default Layout;
