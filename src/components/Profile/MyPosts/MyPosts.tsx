import React, { FC } from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

type MyPostsPropsType = {}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
					<button>Remove</button>
				</div>
			</div>
			<div className={s.posts}>
				<Post message='Hi, how are you?' />
				<Post message="It's my first post" />
			</div>
		</div>
	)
}
