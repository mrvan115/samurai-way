import React, { FC } from 'react'
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {}

export const Profile: FC<ProfilePropsType> = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts />
		</div>
	)
}
