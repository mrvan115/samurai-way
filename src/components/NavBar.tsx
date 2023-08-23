import React, { FC } from 'react'

type NavBarPropsType = {}

export const NavBar: FC<NavBarPropsType> = (props) => {
	return (
		<nav className={'nav'}>
			<div>
				<a href='#'>Messages</a>
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
