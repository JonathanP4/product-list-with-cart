type Image = {
	thumbnail: string;
	mobile: string;
	tablet: string;
	desktop: string;
};

type Item = {
	price: number;
	name: string;
	category: string;
	quantity?: number;
	image: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
};

interface CartItem extends Item {
	quantity: number;
}
