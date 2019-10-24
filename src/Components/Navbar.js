import React from 'react';
import Logo from './../images/logo.svg';
import '../styles/Navbar.css';


class Navbar extends React.Component {
	render() {
		return <div className='Navbar'>
				<div className='container-fluid'></div>	
			<a className='Navbar-brand 'href='/'>
				<img className='Navbar-brand-logo'
				 src={Logo} alt='Logo' /> 
				México City Stores Map 
			</a>
		</div>;
	}
}

export default Navbar;