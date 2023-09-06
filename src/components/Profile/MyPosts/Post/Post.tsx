import React, { FC } from 'react'
import styles from './Post.module.css'

type PostPropsType = {}

export const Post: FC<PostPropsType> = (props) => {
	return (
		<div className={styles.item}>
			<img
				src='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
				alt=''
			/>
			post 1
		</div>
	)
}
