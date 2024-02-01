import axios from 'axios'
axios.defaults.baseURL = 'https://652ec9c10b8d8ddac0b1e3ab.mockapi.io/'

export const getContacts = async () => {
	const { data } = await axios('/advert')
	return data
}