<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		href: string;
		children?: Snippet;
	}
	let { children, href, ...restProps }: Props = $props();
</script>

<a
	{href}
	class="box-content inline-block border border-transparent bg-black px-8 py-3 text-white transition-all hover:border hover:border-black hover:bg-transparent hover:text-black"
	{...restProps}
>
	{@render children?.()}
</a>

<style>
</style>
