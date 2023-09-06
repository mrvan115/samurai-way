import React, { FC } from 'react'
import styles from './NavBar.module.css'

type NavBarPropsType = {}

export const NavBar: FC<NavBarPropsType> = (props) => {
	return (
		<nav className={styles.nav}>
			<div>
				<a href='#' className={`${styles.item} ${styles.active}`}>
					Messages
				</a>
			</div>
			<div>
				<a href='#'>News</a>
			</div>
			<div>
				<a href='#'>Music</a>
			</div>
			<div>
				<a href='#'>Settings</a>
			</div>
		</nav>
	)
}
