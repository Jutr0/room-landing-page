import { IAdditionalInfo } from '../../utils/constants';
import './style.scss';

const AdditionalInfo = ({ images, heading, description }: IAdditionalInfo) => {
	return (
		<main className="additionalInfo__container">
			<div
				className="additionalInfo__image"
				style={{ backgroundImage: `url('${images[0]}'` }}
			></div>
			<div className="additionalInfo__info">
				<h2 className="additionalInfo__heading">{heading}</h2>
				<p className="additionalInfo__description">{description}</p>
			</div>
			<div
				className="additionalInfo__image"
				style={{ backgroundImage: `url('${images[1]}'` }}
			></div>
		</main>
	);
};

export default AdditionalInfo;
