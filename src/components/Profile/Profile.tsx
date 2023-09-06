import React, { FC } from 'react'
import styles from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'

type ProfilePropsType = {}

export const Profile: FC<ProfilePropsType> = (props) => {
	return (
		<div className={styles.content}>
			<div>
				<img
					src='https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg'
					alt=''
				/>
			</div>
			<MyPosts />
		</div>
	)
}
