import React, { FC } from 'react'
import styles from './Header.module.css'

type HeaderPropsType = {}

export const Header: FC<HeaderPropsType> = (props) => {
	return (
		<header className={styles.header}>
			<img
				src='https://www.rippletraining.com/wp-content/uploads/2018/03/davinci-logo-300x300.png'
				alt=''
			/>
		</header>
	)
}
