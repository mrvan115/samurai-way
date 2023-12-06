import React, { FC, useRef } from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { ProfilePageType } from '../../../redux/state'

type MyPostsPropsType = {
	state: ProfilePageType
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
	let newPostEl = useRef<HTMLTextAreaElement>(null)

	const addPostHandler = () => {
		if (newPostEl.current !== null) {
			alert(newPostEl.current.value)
		}
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostEl}></textarea>
				</div>
				<div>
					<button onClick={addPostHandler}>Add Post</button>
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
