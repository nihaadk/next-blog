import { Box, Grid } from '@material-ui/core';
import PostItem from './post-item';

function PostsGrid(props) {
	const { posts } = props;

	return (
		<Box>
			<Grid container spacing={5}>
				{posts.map((post) => (
					<Grid item>
						<PostItem key={post.slug} post={post} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default PostsGrid;
