import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './redux/state'

const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App
				store={store}
				addPost={store.addPost.bind(store)}
				updateNewPostText={store.updateNewPostText.bind(store)}
			/>
		</BrowserRouter>,
		document.getElementById('root')
	)
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
