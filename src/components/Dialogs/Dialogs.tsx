import React, { FC } from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogsItem/DialogsItem'
import { Message } from './Message/Message'
import { MessagesPageType } from '../redux/state'

type DialogsPropsType = {
	state: MessagesPageType
}

export const navLinkCssClasses = (isActive: boolean) =>
	isActive ? s.active : s.dialogsItem

export const Dialogs: FC<DialogsPropsType> = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{props.state.dataDialogs.map((obj) => {
					return <DialogItem key={obj.id} name={obj.name} id={obj.id} />
				})}
			</div>
			<div className={s.messages}>
				{props.state.messagesData.map((m) => {
					return <Message key={m.id} message={m.message} />
				})}
			</div>
		</div>
	)
}
