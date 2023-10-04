import React, { FC } from 'react'
import s from './Settings.module.css'

type SettingsPropsType = {}

export const Settings: FC<SettingsPropsType> = (props) => {
	return <div className={s.settings}>Settings</div>
}
