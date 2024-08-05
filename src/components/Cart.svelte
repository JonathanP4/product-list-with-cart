<script lang="ts">
	import { cart } from "../store/cart";
	import { formatCurrency } from "../util/util";
	import Button from "./Button.svelte";
	import CartItem from "./CartItem.svelte";

	export let confirmOrder: () => boolean;

	$: totalItems = $cart
		.map((i) => i.quantity)
		.reduce((prev, curr) => prev + curr, 0);

	$: totalPrice = $cart
		.map((i) => i.price * i.quantity)
		.reduce((prev, curr) => prev + curr, 0);
</script>

<div
	class="p-4 rounded-lg bg-white grid mt-4 md:sticky top-6 md:min-w-[250px] lg:min-w-[400px]"
>
	<h2 class="text-2xl font-bold text-red mb-4">
		Your Cart ({totalItems})
	</h2>
	{#if totalItems < 1}
		<section class="justify-self-center">
			<figure>
				<img
					class="m-auto"
					src="/images/illustration-empty-cart.svg"
					alt="no items in cart"
				/>
			</figure>

			<p class="text-sm text-rose-500 font-semibold mt-4">
				Your added items will appear here
			</p>
		</section>
	{:else}
		<div>
			<ul class="max-h-[330px] overflow-y-auto pr-3">
				{#each $cart as item}
					<CartItem {item} />
				{/each}
			</ul>

			<section class="flex items-center justify-between mt-4">
				<p>Order total</p>
				<h3 class="text-2xl font-bold text-rose-900">
					{formatCurrency(totalPrice)}
				</h3>
			</section>
			<div
				class="flex items-center gap-x-2 bg-rose-50 p-2 px-3 rounded-lg my-6"
			>
				<img
					src="/images/icon-carbon-neutral.svg"
					alt="carbon neutral"
				/>
				<p>This is a <strong>carbon-neutral</strong> delivery</p>
			</div>
			<Button onClick={confirmOrder} text={"Confirm Order"} />
		</div>
	{/if}
</div>
