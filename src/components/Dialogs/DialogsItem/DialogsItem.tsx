import React, { FC } from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import { navLinkCssClasses } from '../Dialogs'

type DialogItemPropsType = {
	name: string
	id: string
}

export const DialogItem: FC<DialogItemPropsType> = (props) => {
	let path = '/dialogs/' + props.id

	return (
		<div className={s.dialog}>
			<div>
				<NavLink className={navLinkCssClasses} to={path}>
					{props.name}
				</NavLink>
			</div>
		</div>
	)
}
