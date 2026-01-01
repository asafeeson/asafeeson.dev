<script lang="ts">
	import { cn } from '$utils/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children: Snippet;
	}

	let { children, className }: Props = $props();
</script>

<footer class={cn('bg-footer-bg text-gray-300', className)}>
	{@render children()}
</footer>
