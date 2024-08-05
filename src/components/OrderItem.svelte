<script lang="ts">
	import { formatCurrency } from "../util/util";

	export let item: Item;
</script>

<li
	class="gap-x-2 flex items-center justify-between py-3 border border-transparent border-b-rose-100"
>
	<div class="flex gap-x-4 items-center">
		<figure>
			<img
				class="rounded-lg"
				src={item.image.thumbnail}
				alt={item.name}
				width="60"
				height="60"
			/>
		</figure>
		<div>
			<h3 class="text-rose-900 line-clamp-1">
				{item.name}
			</h3>
			<section class="flex items-center gap-x-4">
				<span class="text-red font-bold">{item.quantity}x</span>
				<span class="text-rose-500">@{formatCurrency(item.price)}</span>
			</section>
		</div>
	</div>

	<span class="text-rose-500 font-bold text-lg"
		>{formatCurrency(item.price * (item?.quantity || 1))}</span
	>
</li>
