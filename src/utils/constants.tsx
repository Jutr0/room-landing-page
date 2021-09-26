import photo1 from '../images/desktop-image-hero-1.jpg';
import photo2 from '../images/desktop-image-hero-2.jpg';
import photo3 from '../images/desktop-image-hero-3.jpg';
import mphoto1 from '../images/mobile-image-hero-1.jpg';
import mphoto2 from '../images/mobile-image-hero-2.jpg';
import mphoto3 from '../images/mobile-image-hero-3.jpg';

import additionalPhoto1 from '../images/image-about-dark.jpg';
import additionalPhoto2 from '../images/image-about-light.jpg';

export const SLIDES: ISlide[] = [
	{
		image: photo1,
		mobileImage: mphoto1,
		heading: 'Discover innovative ways to decorate',
		description:
			'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
		buttonText: 'Shop now',
	},
	{
		image: photo2,
		mobileImage: mphoto2,
		heading: 'We are available all across the globe',
		description:
			"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
		buttonText: 'Shop now',
	},
	{
		image: photo3,
		mobileImage: mphoto3,
		heading: 'Manufactured with the best materials',
		description:
			'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
		buttonText: 'Shop now',
	},
];

export const ADDITIONAL_INFO: IAdditionalInfo = {
	images: [additionalPhoto1, additionalPhoto2],
	heading: 'About our furniture',
	description:
		'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.',
};

export type ISlide = {
	image: string;
	mobileImage: string;
	heading: string;
	description: string;
	buttonText: string;
};
export type IAdditionalInfo = {
	images: string[];
	heading: string;
	description: string;
};
