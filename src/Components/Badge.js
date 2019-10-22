import React from 'react';
import '../styles/Badge.css';

import Logo from '../images/logo.svg';
class Badge extends React.Component {
	render() { 

		const firstName = 'Adriana Evelyn';
		const lastName = 'Sánchez Mejias';

		return <div className=''>
		<div className='Badge-logo'>
				<img src={Logo} alt='logo'/>
			</div>
				<div className='Badge'>
				<div className='Badge-header'> 
				<h1>México City Stores Map</h1>
			</div>	
			</div>
			<div className='Badge-section-name'> 
				<h1>
				{this.props.firstName} <br /> {this.props.lastName}
				</h1>
			</div>

			<div className='Badge-section-info'> 
				<h4>Visualiza las tiendas de ciudad de México a través de nuestro Mapa</h4>
			</div>

			<div className='Badge-footer'> 
				<h6>MexCityStoresMap 2019 - Adriana Sánchez</h6>
			</div>
		</div>
	}
}


export default Badge;