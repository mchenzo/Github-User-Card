import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('store') @observer
class SearchBar extends Component{

	render(){
		return(
			<input 
				className='search-bar'
				type='text'
				value={this.props.store.username}
				placeholder='username'
				onChange={(event) => this.props.store.handleNewSearch(event.target.value)}
				onKeyUp={(event) => {
					if(event.keyCode === 13){
						this.props.store.onSearchClick()
					}
				}} />

		)
	}
}

export default SearchBar