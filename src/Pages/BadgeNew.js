import React from 'react';

import '../styles/BadgeNew.css';
import Badge from './../Components/Badge';
import BadgeForm from './../Components/BadgeForm';
import Map from './../Components/Map';
import { GoogleApiWrapper } from 'google-maps-react';
import Navbar from './../Components/Navbar';

class BadgeNew extends React.Component {
	render() {
		return (
			<div className='col-sm-12 col-md-12 col-lg-12'>
			<div className='Badge'>
			<div className=''>
				<Navbar />
			<div className='BadgeNew-hero'>
			</div>
		
			<div className='container'>
			<div className='row'>
			<div className='col-sm-6 col-md-6 col-lg-6'>
				<Badge
					input type='text' className='form-control' ref='searchInput' placeholder='Search México City Stores Map' value={this.props.query} onChange={this.doSearch}/>
			</div>


				<BadgeForm />
				<Map />
				<GoogleApiWrapper />
					<div className='col-sm-12 col-md-12 col-lg-12'>
						<div className='Badge-footer'> 
				<h6>MexCityStoresMap 2019 - Adriana Sánchez</h6>
			</div>
					
				</div>
			</div>
		</div>
	</div>
		</div>
		</div>
		);
	}
}

export default BadgeNew;