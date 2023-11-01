import React, { FC } from 'react'
import styles from './Post.module.css'

type PostPropsType = {
	message: string
	likesCount: string
}

export const Post: FC<PostPropsType> = (props) => {
	return (
		<div className={styles.item}>
			<img
				src='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
				alt=''
			/>
			{props.message}
			<div>
				<span>Like!</span>
				<span> {props.likesCount}</span>
			</div>
		</div>
	)
}
