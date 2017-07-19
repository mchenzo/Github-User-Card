import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

//gaearon
//name,email,bio,company,created at, #repos, #gists, avatar

@inject('store') @observer
class Card extends Component{



	render(){
		return (
			<div id='card'>
				<img 
					className='avatar'
					alt=''
					src={this.props.store.avatar_url} />
				<h1 className='name'>{this.props.store.name}</h1>
				<div className='small-info'>
					<p>email: {this.props.store.email}</p>
					<p>company: {this.props.store.company}</p>
					<p>{this.props.store.created} joined</p>
					<p>{this.props.store.followers} followers</p>
					<p>{this.props.store.following} following</p>
				</div>
				<div className='big-info'>
					<p><strong>Bio:</strong> {this.props.store.bio}</p>
					<p>{this.props.store.repos} public repos</p>
					<p>{this.props.store.gists} gists</p>
				</div>

			</div>
		)
	}
}

export default Card