import React, { FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogsItem/DialogsItem'
import { Message } from './Message/Message'

type DialogsPropsType = {}

export const navLinkCssClasses = (isActive: boolean) =>
	isActive ? s.active : s.dialogsItem

export const Dialogs: FC<DialogsPropsType> = (props) => {
	const dataDialogs = [
		{ id: '1', name: 'Dimych' },
		{ id: '2', name: 'Sasha' },
		{ id: '3', name: 'Valera' },
		{ id: '4', name: 'Viktor' },
		{ id: '5', name: 'Nastya' }
	]

	const messagesData = [
		{ id: '1', message: 'Hi' },
		{ id: '2', message: 'How are you?' },
		{ id: '3', message: 'Yo' },
		{ id: '4', message: 'Hi, Yo' },
		{ id: '5', message: 'Hi, How are you?' }
	]

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dataDialogs.map((obj) => {
					return <DialogItem key={obj.id} name={obj.name} id={obj.id} />
				})}
			</div>
			<div className={s.messages}>
				{messagesData.map((m) => {
					return <Message key={m.id} message={m.message} />
				})}
			</div>
		</div>
	)
}
