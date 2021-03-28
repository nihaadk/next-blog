import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import Navigation from '../components/layout/navigation';
import { Container, Box, CssBaseline } from '@material-ui/core';
import FooterPage from '../components/layout/footer';
import Layout from '../components/layout/layout';

export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<Fragment>
			<Head>
				<title>Next Blog</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Navigation />
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<FooterPage />
			</ThemeProvider>
		</Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired
};
