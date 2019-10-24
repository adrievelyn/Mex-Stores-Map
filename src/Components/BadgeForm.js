import React from 'react';

class BadgeForm extends React.Component {
	handleChange = (e) => {
		console.log({ 
			name: e.target.name,
			value: e.target.value });
	};

	handleClick = (e) => {
			console.log('Button was clicked');
	};

	handleSubmit = (e) => {
			e.preventDefault();
			console.log('Form was submitted');
	};

	render (){
		return (
			<div className='Badge'>
			<div className='Badge-header'> 
			<div className='container'>
			<div className='row'>
			<div className='Badge-Favorites'>

				<h3>My Favorites Stores</h3>
				<ul>
					<a href='Directions'>Directions</a>
					<a href='AddFavorites'>Add Favorites</a >
					<a href='SendEmail'>Send to you Email</a >
					<a href='Share'>Share</a>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

		);
	}
}

export default BadgeForm;