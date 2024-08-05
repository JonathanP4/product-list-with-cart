<script lang="ts">
	export let onClick: any | undefined;
	export let text: string;
</script>

<button
	on:click={onClick}
	class="bg-red hover:bg-[#982c0b] text-white text-lg w-full rounded-full py-2"
	>{text}</button
>
