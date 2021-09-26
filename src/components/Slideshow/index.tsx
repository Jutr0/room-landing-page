import { ISlide } from '../../utils/constants';
import Arrow from '../Arrow';

import larrow from '../../images/icon-angle-left.svg';
import parrow from '../../images/icon-angle-right.svg';

import './style.scss';
import { nextPage, prevPage } from '../../app/actionsCreators';
import { useAppDispatch } from '../../app/hooks';

const Slideshow = ({ image, heading, description, buttonText }: ISlide) => {
	const dispatch = useAppDispatch();

	const handleNextPage = () => {
		dispatch(nextPage());
	};

	const handlePreviousPage = () => {
		dispatch(prevPage());
	};

	return (
		<div className="slideshow__container">
			<div
				className="slideshow__image"
				style={{ backgroundImage: `url('${image}')` }}
			></div>
			<div className="slideshow__info">
				<h1 className="slideshow__heading">{heading}</h1>
				<p className="slideshow__description">{description}</p>
				<div tabIndex={0} className="slideshow__shop-btn">
					<span>{buttonText}</span> <Arrow thickness="thin" width={56} />
				</div>
				<div className="slideshow__buttons">
					<div className="slideshow__left" onClick={handlePreviousPage}>
						<img src={larrow} alt="leftArrow" />
					</div>
					<div className="slideshow__right" onClick={handleNextPage}>
						<img src={parrow} alt="rightArrow" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slideshow;
