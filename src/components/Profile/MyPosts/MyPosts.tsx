import React, { FC } from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { ProfilePageType } from '../../redux/state'

type MyPostsPropsType = {
	state: ProfilePageType
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
	// const postData = [
	// 	{ id: '1', message: 'Hi, how are you?', likesCount: '1' },
	// 	{ id: '2', message: "It's my first post", likesCount: '23' },
	// 	{ id: '3', message: 'how are you?', likesCount: '15' },
	// 	{ id: '4', message: 'Hi', likesCount: '17' },
	// 	{ id: '5', message: "Hi, how are you? It's my first post", likesCount: '6' }
	// ]

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
				{props.state.postData.map((p) => {
					return (
						<Post key={p.id} message={p.message} likesCount={p.likesCount} />
					)
				})}
			</div>
		</div>
	)
}
