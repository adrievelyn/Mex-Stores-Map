import React from 'react';
import '../styles/Badge.css';

import Logo from '../images/logo.svg';
class Badge extends React.Component {
	render() { 

		const firstName = 'Adriana Evelyn';
		const lastName = 'Sánchez Mejias';

		return <div className='Badge'>
			<div className='Badge-header'> 
				<div className='container'>
				<div className='row'>
				<div className='col-12'>
			
				<h3>México City Stores Map</h3>
			</div>	
		</div>
	</div>	
</div>	
			<div className='Badge-section-info'> 
				<h4>Visualiza las tiendas de ciudad de México a través de nuestro Mapa</h4>
			</div>
		</div>
	}
}


export default Badge;