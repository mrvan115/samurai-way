import React, { FC } from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { NewPostTextType, ProfilePageType } from '../../redux/state'

type ProfilePropsType = {
	state: ProfilePageType
	addPost: () => void
	newPostText: NewPostTextType
	updateNewPostText: (newText: NewPostTextType) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				state={props.state}
				addPost={props.addPost}
				newPostText={props.newPostText}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	)
}
