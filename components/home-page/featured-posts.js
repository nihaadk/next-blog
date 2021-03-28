import { Grid, Typography, Container, Box } from '@material-ui/core';
import PostsGrid from '../posts/posts-grid';

function FeautredPosts(props) {
	return (
		<section>
			<Box my={4}>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h3" gutterBottom>
								Featured Posts
							</Typography>
						</Grid>
						<PostsGrid posts={props.posts} />
					</Grid>
				</Container>
			</Box>
		</section>
	);
}

export default FeautredPosts;
