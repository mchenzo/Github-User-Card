import {observable, action} from 'mobx'
import axios from 'axios';

//let url = `${API}/${username}`

// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
const url = 'https://api.github.com/users/'
//axios.get(url[, config])

class githubStore{

	@observable username = ''
	@action handleNewSearch = (value) => {
		this.username = value
	}

	@action onSearchClick = () => {
		let searchUrl = `${url}${this.username}`
		axios.get(searchUrl)
			.then((response) => {
			this.name = response.data.name
			this.bio = response.data.bio
			this.company = response.data.company
			this.created = response.data.created_at
			this.repos = response.data.public_repos
			this.gists = response.data.public_gists
			this.avatar_url = response.data.avatar_url
			this.followers = response.data.followers
			this.following = response.data.following
			this.email = response.data.email
			})
	}

	@observable email = ''
	@observable name = ''
	@observable bio = ''
	@observable company = ''
	@observable created = ''
	@observable repos;
	@observable gists;
	@observable avatar_url = ''
	@observable followers;
	@observable following;
}

var store = new githubStore()

export default store