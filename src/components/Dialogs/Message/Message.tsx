import React, { FC } from 'react'
import s from './../Dialogs.module.css'

type MessagePropsType = {
	message: string
}

export const Message: FC<MessagePropsType> = (props) => {
	return <div className={s.message}>{props.message}</div>
}
