import { useRef } from 'react';
import { Button, FormGroup, TextField, Grid, Box, Typography, Card, CardContent, Paper } from '@material-ui/core';

function ContactPage(props) {
	const emailRef = useRef();
	const nameRef = useRef();
	const messageRef = useRef();

	function submitHandler(event) {
		event.preventDefault();
		const emailValue = emailRef.current.value;
		const nameValue = nameRef.current.value;
		const messageValue = messageRef.current.value;
		console.log(emailValue, nameValue, messageValue);
	}

	return (
		<Box my={4}>
			<Grid container direction="column" alignItems="center" justify="center">
				<Grid item xs={8}>
					<Paper>
						<Card>
							<CardContent>
								<Box display="flex" justifyContent="center" m={3} px={4}>
									<Typography variant="h3">How can I help you?</Typography>
								</Box>

								<form noValidate autoComplete="off" onSubmit={submitHandler}>
									<Box my={2}>
										<FormGroup>
											<TextField
												inputRef={emailRef}
												id="email"
												label="Email"
												variant="outlined"
											/>
										</FormGroup>
									</Box>

									<Box my={2}>
										<FormGroup>
											<TextField inputRef={nameRef} id="name" label="Name" variant="outlined" />
										</FormGroup>
									</Box>

									<Box my={2}>
										<FormGroup>
											<TextField
												inputRef={messageRef}
												id="message"
												label="Message"
												variant="outlined"
												multiline
												rows={4}
											/>
										</FormGroup>
									</Box>

									<Button type="submit" size="large" variant="contained" color="primary">
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
}

export default ContactPage;
