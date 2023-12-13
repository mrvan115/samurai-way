//-TYPES----------------------------------------------------------------------------------------------------------------
import { rerenderEntireTree } from '../render'

export type StateType = {
	profilePage: ProfilePageType
	messagesPage: MessagesPageType
	sidebar: SidebarType
}

export type ProfilePageType = {
	postData: PostDataType[]
	newPostText: NewPostTextType
}
export type MessagesPageType = {
	dataDialogs: DataDialogsType[]
	messagesData: MessagesDataType[]
}
export type SidebarType = {}

export type PostDataType = {
	id: number
	message: string
	likesCount: number
}

export type NewPostTextType = string

export type DataDialogsType = {
	id: number
	name: string
}
export type MessagesDataType = {
	id: number
	message: string
}

//-DATA-----------------------------------------------------------------------------------------------------------------
export const state: StateType = {
	profilePage: {
		postData: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 1 },
			{ id: 2, message: "It's my first post", likesCount: 23 },
			{ id: 3, message: 'how are you?', likesCount: 15 },
			{ id: 4, message: 'Hi', likesCount: 17 },
			{
				id: 5,
				message: "Hi, how are you? It's my first post",
				likesCount: 6
			}
		],
		newPostText: 'it-kamasutra'
	},
	messagesPage: {
		dataDialogs: [
			{ id: 1, name: 'Dimych' },
			{ id: 2, name: 'Sasha' },
			{ id: 3, name: 'Valera' },
			{ id: 4, name: 'Viktor' },
			{ id: 5, name: 'Nastya' }
		],
		messagesData: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'How are you?' },
			{ id: 3, message: 'Yo' },
			{ id: 4, message: 'Hi, Yo' },
			{ id: 5, message: 'Hi, How are you?' }
		]
	},
	sidebar: {}
}
//-FUNCTIONS------------------------------------------------------------------------------------------------------------

export const addPost = () => {
	let newPost: PostDataType = {
		id: Math.random(),
		message: state.profilePage.newPostText,
		likesCount: 0
	}
	state.profilePage.postData.push(newPost)
	state.profilePage.newPostText = ''
	rerenderEntireTree(state)
}

export const updateNewPostText = (newText: NewPostTextType) => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}
