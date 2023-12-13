import React, { FC, useRef } from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { NewPostTextType, ProfilePageType } from '../../../redux/state'

type MyPostsPropsType = {
	state: ProfilePageType
	addPost: () => void
	newPostText: NewPostTextType
	updateNewPostText: (newText: NewPostTextType) => void
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
	let newPostEl = useRef<HTMLTextAreaElement>(null)

	const addPostHandler = () => {
		if (newPostEl.current !== null) {
			props.addPost()
		}
	}

	const onPostChange = () => {
		if (newPostEl.current !== null) {
			let text = newPostEl.current.value
			props.updateNewPostText(text)
		}
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostEl}
						value={props.newPostText}
					/>
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
