import React, { FC } from 'react'
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {}

export const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
	return (
		<div className={s.profileInfo}>
			<div>
				<img
					src='https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg'
					alt='#'
				/>
			</div>
			<div className={s.descriptionBlock}>ava + description</div>
		</div>
	)
}
