import './style.scss';

const Backdrop = ({ isOpen, handleBackdropClick }: IBackdrop) => {
	return (
		<div
			className="backdrop"
			id={isOpen ? 'active' : ''}
			onClick={handleBackdropClick}
			onTouchStart={handleBackdropClick}
			onScrollCapture={handleBackdropClick}
		/>
	);
};

export default Backdrop;

type IBackdrop = {
	isOpen: boolean;
	handleBackdropClick: () => void;
};
