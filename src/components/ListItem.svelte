<script lang="ts">
	import { formatCurrency } from "../util/util";
	import CartButton from "./CartButton.svelte";

	export let item: Item;

	let itemSelected = false;

	const selectItem = (val: boolean) => (itemSelected = val);

	let isMobile = window.innerWidth < 768;
</script>

<li>
	<figure
		class={`border-2 rounded-xl ${itemSelected ? "border-red" : " border-transparent"}`}
	>
		<img
			class="rounded-xl"
			src={item.image[isMobile ? "mobile" : "desktop"]}
			alt={item.name}
		/>
	</figure>
	<CartButton {item} {selectItem} />
	<p class="text-rose-300 mt-4">{item.category}</p>
	<h2 class="text-rose-900 text-lg font-semibold">{name}</h2>
	<p class="text-red font-semibold text-lg">
		{formatCurrency(item.price)}
	</p>
</li>
