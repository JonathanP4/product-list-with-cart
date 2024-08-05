<script lang="ts">
	import { cart } from "../store/cart";

	export let item: Item;
	export let selectItem: (val: boolean) => boolean;

	$: quantity = $cart.find((i) => i.name === item.name)?.quantity || 0;
	$: selectItem(quantity > 0);

	const clickHandler = (action: "INCREMENT" | "DECREMENT") => {
		if (action === "INCREMENT") {
			quantity += 1;
			cart.add({ ...item, quantity });
		} else {
			quantity -= 1;
			cart.remove({ ...item, quantity });
		}
	};
</script>

{#if quantity < 1}
	<button
		on:click={() => clickHandler("INCREMENT")}
		class="bg-white border-rose-300 hover:border-red hover:text-red border flex items-center gap-x-2 px-6 py-3 mx-auto -mt-6 z-10 relative rounded-full"
	>
		<img src="/images/icon-add-to-cart.svg" alt="cart icon" />
		<span class="font-semibold">Add to Cart</span>
	</button>
{:else}
	<div
		class="flex items-center bg-red w-[165px] text-white justify-between rounded-full px-6 py-3 mx-auto -mt-6 z-10 relative border border-transparent"
	>
		<button
			on:click={() => clickHandler("DECREMENT")}
			class="rounded-full border border-white w-5 h-5 place-content-center grid hover:bg-white hover:text-red"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="10"
				height="2"
				fill="none"
				viewBox="0 0 10 2"
				><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" /></svg
			>
		</button>
		<span>{quantity}</span>
		<button
			on:click={() => clickHandler("INCREMENT")}
			class="rounded-full border border-white w-5 h-5 place-content-center grid hover:bg-white hover:text-red"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="10"
				height="10"
				fill="none"
				viewBox="0 0 10 10"
				><path
					fill="currentColor"
					d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
				/></svg
			>
		</button>
	</div>
{/if}
