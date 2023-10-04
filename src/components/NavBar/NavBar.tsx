import React, { FC } from 'react'
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

type NavBarPropsType = {}

const navLinkCssClasses = (isActive: boolean) => (isActive ? s.active : s.item)

export const NavBar: FC<NavBarPropsType> = (props) => {
	return (
		<nav className={s.nav}>
			<div>
				<NavLink className={navLinkCssClasses} to='/profile'>
					Profile
				</NavLink>
			</div>
			<div>
				<NavLink className={navLinkCssClasses} to='/dialogs'>
					Messages
				</NavLink>
			</div>
			<div>
				<NavLink className={navLinkCssClasses} to='/news'>
					News
				</NavLink>
			</div>
			<div>
				<NavLink className={navLinkCssClasses} to='/music'>
					Music
				</NavLink>
			</div>
			<div>
				<NavLink className={navLinkCssClasses} to='/settings'>
					Settings
				</NavLink>
			</div>
		</nav>
	)
}
