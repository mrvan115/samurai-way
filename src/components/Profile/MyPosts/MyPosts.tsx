import React, { FC } from 'react'
import styles from './MyPosts.module.css'
import { Post } from './Post/Post'

type MyPostsPropsType = {}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add Post</button>
				<button>Remove</button>
			</div>
			<div className={styles.posts}>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}
