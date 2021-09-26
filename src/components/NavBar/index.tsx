import { useState } from 'react';

import Backdrop from '../Backdrop';

import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';

import './style.scss';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleBackdropClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<nav id="navbar">
				<img
					className="hamburger"
					src={isMenuOpen ? close : hamburger}
					alt="Hamburger"
					onClick={handleMenuOpen}
				/>
				<img className="logo" src={logo} alt={Object.keys(logo)[0]} />
				<div className="menuOpts" id={isMenuOpen ? 'activeMenuOpts' : ''}>
					<a href="#">Home</a>
					<a href="#">Shop</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</div>
				<Backdrop
					isOpen={isMenuOpen}
					handleBackdropClick={handleBackdropClick}
				/>
			</nav>
		</>
	);
};

export default NavBar;
