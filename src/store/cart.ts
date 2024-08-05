import { writable } from "svelte/store";

function createCart() {
	const { subscribe, set, update } = writable([] as CartItem[]);

	return {
		subscribe,
		add: (item: CartItem) =>
			update((c) => {
				const itemIndex = c.findIndex((i) => i.name === item.name);
				if (itemIndex >= 0) {
					c[itemIndex].quantity += 1;
					c = c;
					return c;
				} else {
					return [...c, item];
				}
			}),
		delete: (name: string) =>
			update((c) => {
				c = c.filter((i) => i.name !== name);
				return c;
			}),
		remove: (item: Item) =>
			update((c) => {
				const itemIndex = c.findIndex((i) => i.name === item.name);

				c[itemIndex].quantity -= 1;

				if (c[itemIndex].quantity === 0)
					c = c.filter((i) => i.name !== item.name);

				c = c;
				return c;
			}),
		reset: () => set([]),
	};
}

export const cart = createCart();
