import React from 'react';
import Slideshow from './Slideshow';

import { ADDITIONAL_INFO, SLIDES } from '../utils/constants';
import AdditionalInfo from './AdditionalInfo';
import NavBar from './NavBar';
import { useAppSelector } from '../app/hooks';

function App() {
	const page = useAppSelector((state) => state.page);

	return (
		<main className="container">
			<NavBar />
			<Slideshow {...SLIDES[page]} />
			<AdditionalInfo {...ADDITIONAL_INFO} />
		</main>
	);
}

export default App;
