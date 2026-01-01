<script lang="ts">
	import { cn } from '$utils/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children: Snippet;
	}

	let { className, children }: Props = $props();
</script>

<div class={cn("container mx-auto px-4 py-12", className)}>
	{@render children()}
</div>
