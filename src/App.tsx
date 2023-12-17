import React, { FC } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/Profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { NewPostTextType, StoreType } from './redux/state'

type AppPropsType = {
	store: StoreType
	addPost: () => void
	updateNewPostText: (newText: NewPostTextType) => void
}

const App: FC<AppPropsType> = (props) => {
	const state = props.store.getState()

	return (
		<div className='app-wrapper'>
			<Header />
			<NavBar />
			<div className='app-wrapper-content'>
				<Route
					path='/profile'
					render={() => (
						<Profile
							state={state.profilePage}
							addPost={props.addPost}
							newPostText={state.profilePage.newPostText}
							updateNewPostText={props.updateNewPostText}
						/>
					)}
				/>
				<Route
					path='/dialogs'
					render={() => <Dialogs state={state.messagesPage} />}
				/>
				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/settings' render={() => <Settings />} />
			</div>
		</div>
	)
}

export default App
