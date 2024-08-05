<script lang="ts">
	import data from "../data.json";
	import Cart from "./components/Cart.svelte";
	import ConfirmOrder from "./components/ConfirmOrder.svelte";
	import ListItem from "./components/ListItem.svelte";
	import { cart } from "./store/cart";

	let showConfirmCard = false;

	const confirmOrder = () => (showConfirmCard = true);
	const newOrder = () => {
		showConfirmCard = false;
		cart.reset();
	};
</script>

<main class="p-6 bg-rose-50 md:p-8 md:flex items-start gap-x-8 justify-center">
	<div>
		<h1 class="font-bold text-4xl text-rose-900 mb-8">Desserts</h1>
		<ul
			class="grid justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3"
		>
			{#each data as item (item.name)}
				<ListItem {item} />
			{/each}
		</ul>
	</div>
	<Cart {confirmOrder} />

	<ConfirmOrder {showConfirmCard} {newOrder} />
</main>
