<script lang="ts">
	import { cart } from "../store/cart";
	import { formatCurrency } from "../util/util";

	export let item: CartItem;
</script>

<li
	class="flex items-center justify-between py-2 border border-transparent border-b-rose-100"
>
	<div>
		<h3 class="text-rose-900 font-semibold">
			{item.name}
		</h3>
		<section class="flex items-center gap-x-4">
			<span class="text-red font-bold">{item.quantity}x</span>
			<span class="text-rose-500">@{formatCurrency(item.price)}</span>
			<span class="text-rose-500 font-bold"
				>{formatCurrency(item.price * item.quantity)}</span
			>
		</section>
	</div>
	<button
		on:click={() => cart.delete(item.name)}
		class="w-5 h-5 rounded-full border border-rose-300 text-rose-300 hover:border-rose-900 hover:text-rose-900 grid place-content-center"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="10"
			fill="none"
			viewBox="0 0 10 10"
			><path
				fill="currentColor"
				d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
			/></svg
		>
	</button>
</li>
