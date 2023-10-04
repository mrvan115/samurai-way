import React, { FC } from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import { message } from 'antd'

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
//--------------------------------------------------------------------------------------------------------------------------------------

type MessagePropsType = {
	message: string
}

const Message: FC<MessagePropsType> = (props) => {
	return <div className={s.message}>{props.message}</div>
}

//--------------------------------------------------------------------------------------------------------------------------------------
type DialogsPropsType = {}

const navLinkCssClasses = (isActive: boolean) =>
	isActive ? s.active : s.dialogsItem

export const Dialogs: FC<DialogsPropsType> = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<div className={s.dialog}>
					<DialogItem name={'Dimych'} id={'1'} />
					<DialogItem name={'Sasha'} id={'2'} />
					<DialogItem name={'Valera'} id={'3'} />
					<DialogItem name={'Viktor'} id={'4'} />
					<DialogItem name={'Nastya'} id={'5'} />
				</div>
			</div>
			<div className={s.messages}>
				<Message message={'Hi!'} />
				<Message message={'How are you?'} />
				<Message message={'Yo'} />
			</div>
		</div>
	)
}
