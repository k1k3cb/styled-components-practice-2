import { v4 } from 'uuid';

export const CARDS = [
	{
		id: v4(),		
		$className: 'card-1',
		user: 'Colton Smith',
		userDescription: 'Verified Buyer',
		image: '/assets/images/image-colton.jpg',
		content:
			'“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”'
	},
    {
		id: v4(),		
		$className: 'card-2',
		user: 'Irene Roberts',
		userDescription: 'Verified Buyer',
		image: '/assets/images/image-irene.jpg',
		content:
			'“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”'
	},
    {
		id: v4(),		
		$className: 'card-3',
		user: 'Anne Wallace',
		userDescription: 'Verified Buyer',
		image: '/assets/images/image-anne.jpg',
		content:
			'“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”'
	}
];
